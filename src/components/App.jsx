class App extends React.Component {
  constructor(props) {
    super(props);
    this.getSearchResult = this.getSearchResult.bind(this);

    this.state = {
      currentVideo: this.props.videos[0],
      videoList: this.props.videos
    };
  }

  currentPlayingVideo (vid) {
    this.setState({
      currentVideo: vid
    });
  }

  getSearchResult (options) {
    window.searchYouTube(options, (data) => {
      this.setState({
        currentVideo: data.items[0],
        videoList: data.items
      });
    });
    
  }

  componentDidMount () {
  
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search getSearchResult={this.getSearchResult}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.currentVideo}/></div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList 
              videos={this.state.videoList} 
              listClick={this.currentPlayingVideo.bind(this)}
            />
          </div>
        </div>
      </div>
    </div>);
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;