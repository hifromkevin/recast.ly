var Search = (props) => (
  <form 
    className="search-bar form-inline"
    onSubmit={function(e) { 
      e.preventDefault(); 
      var searchString = $('input').val();
      var options = {
        query: searchString,
        max: 5,
        key: window.YOUTUBE_API_KEY
      };
      $('input').val('');
      props.getSearchResult(options);
    }
    }
  >
    <input 
      className="form-control" 
      type="text" 
      onChange={
        function() {
          var searchString = $('input').val();
          var options = {
            query: searchString,
            max: 5,
            key: window.YOUTUBE_API_KEY
          };
          props.getSearchResult(options);
        }
      } 
    />
    <button className="btn hidden-sm-down" type="submit" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
