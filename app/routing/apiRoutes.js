var friends = require("../data/friends");

module.exports = function(app) 
{
  app.get("/api/friends", function(req, res) 
  {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) 
  {
    var match = 
    {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    // Parse User POST
    var userData = req.body;
    var userScores = userData.scores;

    // Calculate differences between user and each user in database
    var totalDifference;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) 
    {
      var friendSelection = friends[i];
      totalDifference = 0;

      console.log(friendSelection.name);

      // Loop through each friends scores
      for (var j = 0; j < friendSelection.scores.length; j++) 
      {
        var friendSelectionScore = friendSelection.scores[j];
        var currentUserScore = userScores[j];

        // Calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(friendSelectionScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= match.friendDifference) 
      {
        // Reset the bestMatch to be the new friend.
        match.name = friendSelection.name;
        match.photo = friendSelection.photo;
        match.friendDifference = totalDifference;
      }
    }

    // Save user data to database
    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(match);
  });
  
  // Use to clear friends array data
  app.post("/api/clear", function() 
  {
    friends = [];
    console.log("Friends" + friends);
  });
};
