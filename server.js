
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // Import the configuration file

const app = express();

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
