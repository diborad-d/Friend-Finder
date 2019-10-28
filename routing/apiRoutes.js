// apiRoutes.js file should contain two routes:
var tableData = require("../data/friendsData");
var waitListData = require("../data/surveyData");

// ROUTING
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });
  app.get("/api/survey", function(req, res) {
    res.json(waitListData);
  });
  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
  
};
