var path = require("path");

module.exports = function(app) {
    // HTML GET Requests

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
      res.sendFile(path.join(__dirname, "/css/style.css"));
    });
  
    // app.get("/home", function(req, res) {
    //   res.sendFile(path.join(__dirname, "/../public/home.html"));
    // });
  
    // If no matching route is found default to home
    app.use(function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
  };