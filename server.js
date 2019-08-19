const express = require ("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// statuc routing for anything inside of public folder
app.use(express.static('app/public'));

// catch all for all paths not specified in app.public
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './app/public/index.html'));
});


app.listen(PORT, function(){
  console.log("listening on port: " + PORT);
});
