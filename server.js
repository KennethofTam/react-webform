//Name of module
var express = require('express');

// Create app
var app = express();

// Specifies folder name passed in as argument'
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is listening on port 3000')
});
