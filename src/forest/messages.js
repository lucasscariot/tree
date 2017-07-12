const Liana = require('forest-express-mongoose')

Liana.collection('Message', {
  actions: [
    { name: 'Ban user' },
    { name: 'Request user' },
    { name: 'Ping user' },
    { name: 'Email user' },
  ],
})
