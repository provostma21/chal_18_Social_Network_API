const { connect, connection } = require('mongoose');

connect('mongodb://localhost/provostma21BeingSocial', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;