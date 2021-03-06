var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    
  },


  events: {
    'click .video-list-entry-title': 'titleClicked'
  },

  titleClicked: function() {
    this.model.select();
  },

  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
