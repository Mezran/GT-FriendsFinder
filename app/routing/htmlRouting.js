module.exports = function(app){

// -- Should this app.use and app.get be in htmlRouting.js? --

// statuc routing for anything inside of public folder
// app.use(express.static('app/public'));

// catch all for all paths not specified in app.public
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './app/public/index.html'));
});

};
