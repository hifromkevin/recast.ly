var searchYouTube = (options, callback) => {
  // TODO
  var myInput = {
    part: 'snippet',
    key: options.key,
    q: options.query,
    type: 'video',
    maxResults: options.max,
    videoEmbeddable: true
  }; 

  $.ajax({
    url: 'https://googleapis.com/youtube/v3/search',
    type: 'GET',
    data: _.merge(myInput, options),
    dataType: 'json',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
  
};

window.searchYouTube = searchYouTube;
