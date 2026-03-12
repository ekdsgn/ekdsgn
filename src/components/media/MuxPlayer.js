import React from 'react';
import MuxPlayerReact from '@mux/mux-player-react';

const MuxPlayer = ({ playbackId, src, poster, className }) => {
  if (playbackId) {
    return (
      <MuxPlayerReact
        className={className}
        playbackId={playbackId}
        poster={poster}
        streamType="on-demand"
        metadata={{ video_title: 'Project media' }}
      />
    );
  }

  return (
    <video className={className} controls playsInline preload="metadata" poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default MuxPlayer;
