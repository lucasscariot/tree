import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax('http://lucas.scariot.fr:3000/channels');
  }
});
