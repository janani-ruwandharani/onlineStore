"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var app = require('./app');

  // Initialize the app.
  var port = process.env.PORT || 5000;
  var server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
  


