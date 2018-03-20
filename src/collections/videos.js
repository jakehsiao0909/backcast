var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(something) {
    this.fetch({
      data: {
        part: 'snippet',
        q: something,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true,
        // success: function(model, response, options){
        //   console.log('Fetch success!')
        //   console.log('fetch response: ', response);
        // },
        // error: function(model, response, options){
        //   console.error('Fetch error!')
        //   console.log('fetch response: ', response);
        // }
      }
    })
  },

  parse: function(response) {
    return response.items;
  }
  
});


