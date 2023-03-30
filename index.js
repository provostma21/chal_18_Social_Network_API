const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// const mongoose = require('mongoose');

const PORT = 3001;
const app = express();

// mongoose.connect('mongodb://localhost/social_network');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for provostma21's Social Network running on port ${PORT}!`);
    });
  });