const express = require('express');
const mongoose = require('mongoose');
const feedRoutes = require('./routes/feed');
const app = express();
const cors = require('cors');

// to parse incoming json
app.use(express.json());

app.use(function (req, res, next) {
  // 👇️ specify CORS headers to send 👇️
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Methods',
    'POST, PUT, PATCH, GET, DELETE, OPTIONS',
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

// forward any incoming request that starts with '/feed' to feedRoutes
app.use('/feed', feedRoutes);

// setup a database connection using mongoose
// past the connection string given from your atlas server
mongoose
  .connect(
    'mongodb+srv://ivagueba:Welcome12345@birthday-api.p8w54ip.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    console.log("result=> ", result);
    // listen to incoming requests on port 8080
    app.listen(3000, () => console.log('listening on port: ', 3000));
  })
  .catch(err => console.log('err', err))