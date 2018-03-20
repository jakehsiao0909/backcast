var SearchView = Backbone.View.extend({

  events: {
    'keyup input': 'keyUp',
    'click button': 'searching'
  },

  keyUp: function(input) {
    if (input.keyCode === 13) {
      this.searching();
    }
  },

  searching: function() {
    this.collection.search(this.$('input').val());
    this.$('input').val('');
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
