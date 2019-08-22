const friends = require("../data/friends.js");

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {

  });





  app.post('/api/friends', function(req, res) {
    //based on req.body information determine the most compatable friends... that sounds bad, most compatable.
    console.log(friends);
    const userScore = req.body.data;
    // console.log(req.body.data[0]);
    const compatableFriendsProfiles = [];
    // console.log(friends[0].scores[0]);
    //for every friend already in the system...
    for (let i = 0; i < friends.length; i++) {
      // console.log("******************")
      //compare system friend with user scores
      let score = 0;

      for (let j = 0; j < 10; j++) {
        // console.log(Math.abs(userScore[j] - friends[i].scores[j]));
        score += Math.abs(userScore[j] - friends[i].scores[j]);

      }
      compatableFriendsProfiles.push({friend:friends, differenceVal: score});
    }

    // sorts array of friend profiles
    let sortedFriendsProfiles = compatableFriendsProfiles.slice(0);
    sortedFriendsProfiles.sort(function(a,b){
      return a.differenceVal - b.differenceVal;
    })
    console.log(sortedFriendsProfiles);


    // return information and end requests.
    res.json(req.body);
  });
};
