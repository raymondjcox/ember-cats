import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],

  src: function() {
    switch(this.get('type')) {
      case 'airplane':
        return 'assets/airplane.jpg';

      default:
        return 'assets/watermelon.jpg';
    }
  }.property('type')
});
