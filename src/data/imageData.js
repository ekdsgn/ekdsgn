import { buildCloudinaryImageUrl } from '../lib/cloudinary';
import galleryConfig from './cloudinaryGalleryConfig.json';
import galleryManifest from './cloudinaryGalleryManifest.json';

export const imagePublicIds = {
  headerLogo: 'ekdsgn/branding/ek-header-logo',
  footerLogo: 'ekdsgn/branding/ek-footer-logo',
  bottega: 'ek/creativedir/bottegadesires',
  select: 'ekdsgn/projects/selectqb',
  mcmurry: 'ekdsgn/projects/mcmurry',
  txst: 'ekdsgn/projects/txst',
  ek: 'ekdsgn/branding/ek-mark',
  powerade: 'ek/creativedir/powerade',
  '6athletics': 'ek/creativedir/6athletics',
  '77Studios': 'ek/creativedir/77Studios',
};

export const resolveCloudinaryPublicId = (imageRef) =>
  imageRef ? imagePublicIds[imageRef] || imageRef : null;

export const resolveCloudinaryImageUrl = (imageRef, options = {}) => {
  const publicId = resolveCloudinaryPublicId(imageRef);

  return publicId ? buildCloudinaryImageUrl(publicId, options) : '';
};

const createFolderGallery = (galleryKey) => {
  const config = galleryConfig[galleryKey] || {};
  const publicIds = (galleryManifest[galleryKey]?.publicIds || []).map(String).filter(Boolean);

  return {
    thumbnailPublicId: config.thumbnailPublicId || publicIds[0] || null,
    media: publicIds.map((publicId, index) => ({
      type: 'image',
      publicId,
      label: `${config.labelPrefix || 'Gallery image'} ${index + 1}`,
    })),
  };
};

const projectFolderGalleries = {
  powerade: createFolderGallery('powerade'),
  bottega: createFolderGallery('bottegadesires'),
  '6athletics': createFolderGallery('6athletics'),
  '77studios': createFolderGallery('77studios'),
};

export const getProjectFolderGallery = (galleryKey) => projectFolderGalleries[galleryKey] || null;
