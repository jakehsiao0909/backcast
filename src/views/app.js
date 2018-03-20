var AppView = Backbone.View.extend({
  
  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    // let videoList = new VideoListView(window.exampleVideoData);

  },


  render: function() {
    this.$el.html(this.template());

    new VideoPlayerView({
      el: this.$('.players'),
      model: this.videos.at(0),
      collection: this.videos
    })

    new VideoListView({
      el: this.$('.list'),

      collection: this.videos
    });


    return this;
  },

  template: templateURL('src/templates/app.html')

});
