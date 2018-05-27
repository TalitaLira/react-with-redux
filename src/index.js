import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import { setVideos, playVideo } from './actions';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCTMI8dprL0J9ehTja2blzIgF5EPO0PnBo';
// create a new component. This component should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.props.setVideos(videos);
      this.props.playVideo(videos[0]);
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400)
    const { videos } = this.props;
    return (
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail />
          <VideoList />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
const store = createStore(reducer);
const mapDispatchToProps = function (dispatch) {
  return {
    setVideos: videos => {
      dispatch(setVideos(videos))
    },
    playVideo: video => {
      dispatch(playVideo(video))
    }
  }
}

const ConnectedApp = connect(null, mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('.container')
);