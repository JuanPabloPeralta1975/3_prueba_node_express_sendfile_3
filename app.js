var express = require('express');
var app = express();

const path = require ('path')

app.get('/', function(req, res) {
  let htmlPath = path.resolve(__dirname,'./views/index.html')  
  res.sendFile(htmlPath);
});

app.listen(3000, function() {
  console.log('corriendo en  el puerto 3000');
});