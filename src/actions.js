export function setVideos(videos) {
  return {
    type: 'SET_VIDEOS',
    videos,
  };
}

export function playVideo(video) {
  return {
    type: 'PLAY_VIDEO',
    video,
  };
}