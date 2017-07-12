'use strict';
var Liana = require('forest-express-mongoose');

Liana.collection('Conversations', {
  fields: [{
    field: 'fullname',
    type: 'String',
    get: function (object) {
      return '------'
    }
  }]
})
