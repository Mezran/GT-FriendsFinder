const express = require ("express");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static('app/public'));


require("./app/routing/htmlRouting.js")(app);

require('./app/routing/apiRouting.js')(app);


app.listen(PORT, function(){
  console.log("listening on port: " + PORT);
});
