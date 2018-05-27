export default function reducer(state = { videos: [] }, action) {
  switch(action.type) {
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: action.videos,
      };

    case 'PLAY_VIDEO':
      return {
        ...state,
        selectedVideo: action.video,
      };

    default:
      return state;
  }
}