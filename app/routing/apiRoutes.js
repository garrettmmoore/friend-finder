var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {

      friendsData.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function() {

    friendsData = [];
    console.log(friendsData);
  });
};
