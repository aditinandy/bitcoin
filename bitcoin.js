const express = require('express');

const app = express();
var fs = require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));
var prompt = require('prompt');
  prompt.start();
  prompt.get(['enter'], function (err, result) {
    console.log('  enter: ' + result.enter);
    fs.readFile('crypto.txt', function (err, data) {
  if (err) throw err;
  if(data.includes(result.enter)){
   var parsedBody = data.toString().split('\r\n');
   const message = parsedBody.indexOf(result.enter);
   console.log(parsedBody);
  }
});
});