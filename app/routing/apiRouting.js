module.exports = function(app) {

  app.get('/api/friends', function(req, res) {

  });

  app.post('/api/friends', function(req, res) {
    console.log(req.body);
    console.log("********************************");
    console.log(req.body);
    res.json(req.body);
  });
};
