import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = ({selectedVideo}) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoId = selectedVideo.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-repsonsive-item" src={url}></iframe>
      </div>
      <div className="details">
          <div>{selectedVideo.snippet.title}</div>
          <div>{selectedVideo.snippet.description}</div>
      </div>
    </div>
  );
};


const mapStateToProps = function(state) {
  return {
    selectedVideo: state.selectedVideo
  }
}

export default connect(mapStateToProps, null)(VideoDetail);