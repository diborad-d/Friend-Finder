// apiRoutes.js file should contain two routes:
var friendsData = require("../data/friendsData");
var surveyData = require("../data/surveyData");

// ROUTING
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  app.get("/api/survey", function(req, res) {
    res.json(surveyData);
  });
  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    } else {
      surveyData.push(req.body);
      res.json(false);
    }
  });
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;
    surveyData.length = 0;

    res.json({ ok: true });
  });
  
};
