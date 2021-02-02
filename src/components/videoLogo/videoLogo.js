import React from 'react';
import './videoLogo.css';
import LogoCayama from '../logoCayama/logoCayama';

function VideoLogo() {
  return (
    <section className="video-logo-container">
      <div className="video-logo-content">
        <div className="video-logo-video">
          <span>Video</span>
        </div>
        <div className="video-logo-logo">
          <LogoCayama />
        </div>
      </div>
    </section>
  );
}

export default VideoLogo;