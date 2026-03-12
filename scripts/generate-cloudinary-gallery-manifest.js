const fs = require('fs');
const https = require('https');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const configPath = path.join(workspaceRoot, 'src', 'data', 'cloudinaryGalleryConfig.json');
const manifestPath = path.join(workspaceRoot, 'src', 'data', 'cloudinaryGalleryManifest.json');
const envPath = path.join(workspaceRoot, '.env');

const readJsonFile = (filePath, fallbackValue) => {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallbackValue;
  }
};

const loadDotEnvFile = () => {
  if (!fs.existsSync(envPath)) {
    return;
  }

  const contents = fs.readFileSync(envPath, 'utf8');

  contents.split(/\r?\n/).forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmedLine.indexOf('=');

    if (separatorIndex < 0) {
      return;
    }

    const key = trimmedLine.slice(0, separatorIndex).trim();
    const rawValue = trimmedLine.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['\"]|['\"]$/g, '');

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
};

const postJson = (pathName, authHeader, payload) =>
  new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const request = https.request(
      {
        hostname: 'api.cloudinary.com',
        path: pathName,
        method: 'POST',
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (response) => {
        let out = '';

        response.on('data', (chunk) => {
          out += chunk;
        });

        response.on('end', () => {
          if (response.statusCode < 200 || response.statusCode >= 300) {
            reject(new Error(`Cloudinary request failed with status ${response.statusCode}: ${out}`));
            return;
          }

          try {
            resolve(JSON.parse(out));
          } catch (error) {
            reject(error);
          }
        });
      }
    );

    request.on('error', reject);
    request.write(body);
    request.end();
  });

// Uses the Search API so it works for both path-based and DAM asset-folder accounts.
const fetchFolderPublicIds = async ({ cloudName, authHeader, folderPath }) => {
  const publicIds = [];
  let nextCursor = null;

  do {
    const payload = {
      expression: `folder:"${folderPath}"`,
      max_results: 500,

    };

    if (nextCursor) {
      payload.next_cursor = nextCursor;
    }

    const response = await postJson(
      `/v1_1/${cloudName}/resources/search`,
      authHeader,
      payload
    );

    (response.resources || []).forEach((resource) => {
      if (resource.public_id) {
        publicIds.push(resource.public_id);
      }
    });

    nextCursor = response.next_cursor || null;
  } while (nextCursor);

  return [...new Set(publicIds)].sort((left, right) => left.localeCompare(right));
};

const writeManifest = (manifest) => {
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
};

const buildFallbackManifest = (config, existingManifest = {}) =>
  Object.fromEntries(
    Object.entries(config).map(([galleryKey]) => [
      galleryKey,
      {
        publicIds: existingManifest[galleryKey]?.publicIds || [],
      },
    ])
  );

const main = async () => {
  loadDotEnvFile();

  const config = readJsonFile(configPath, {});
  const existingManifest = readJsonFile(manifestPath, {});
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!Object.keys(config).length) {
    writeManifest({});
    console.log('No Cloudinary gallery config found. Wrote empty manifest.');
    return;
  }

  if (!cloudName || !apiKey || !apiSecret) {
    writeManifest(buildFallbackManifest(config, existingManifest));
    console.log('Missing Cloudinary admin credentials. Kept existing gallery manifest data.');
    return;
  }

  const authHeader = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`;
  const manifestEntries = await Promise.all(
    Object.entries(config).map(async ([galleryKey, galleryConfig]) => {
      const publicIds = await fetchFolderPublicIds({
        cloudName,
        authHeader,
        folderPath: galleryConfig.folderPath,
      });

      return [galleryKey, { publicIds }];
    })
  );

  writeManifest(Object.fromEntries(manifestEntries));
  console.log(`Generated Cloudinary gallery manifest for ${manifestEntries.length} folder(s).`);
};

main().catch((error) => {
  console.error('Failed to generate Cloudinary gallery manifest.');
  console.error(error.message || error);
  process.exitCode = 1;
});