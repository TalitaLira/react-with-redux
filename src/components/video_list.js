import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-gorup">
        {videoItems}
    </ul>
  );
};

const mapStateToProps = function(state) {
  return {
    videos: state.videos
  };
}

export default connect(mapStateToProps, null)(VideoList);