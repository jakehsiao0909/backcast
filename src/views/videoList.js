var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.listenTo(this.collection, 'sync', this.render);
    this.render(); 

  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    


    return this;
  },

  


  template: templateURL('src/templates/videoList.html')

});

