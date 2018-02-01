var Search = (props) => (
  <div className="search-bar form-inline">
    <input 
      className="form-control" 
      type="text" 
      onChange={
        function() {
          var searchString = 'Talking Dogs';
          var options = {
            query: searchString,
            max: 5,
            key: window.YOUTUBE_API_KEY
          };
          props.getSearchResult(options);
        }
      } 
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
