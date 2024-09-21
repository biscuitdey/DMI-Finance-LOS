const rfr = require('rfr');
const path = require('path');

const userCtlr = rfr('/server/controllers/users');
const siteCtlr = rfr('/server/controllers/site');
const stepCtlr = rfr('/server/controllers/step');
const loanCtlr = rfr('/server/controllers/loan');

let getHandler = {},
postHandler = {};

// All get services

getHandler['/api/siteConfigurations'] = siteCtlr.siteConfigurations;
getHandler['/api/loan/:id'] = loanCtlr.loanForm;

// All post services
// postHandler['/api/login'] = userCtlr.login;
postHandler['/api/steps'] = stepCtlr.save;


function _bindAllGetRequests(app) {
  for (let key in getHandler) {
    app.get(key, getHandler[key]);
  }

  // Serve the React app for any other route
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

function _bindAllPostRequests(app) {
  for (let key in postHandler) {
    app.post(key, postHandler[key]);
  }
}

function bindAllRequests(app) {
  _bindAllGetRequests(app);
  _bindAllPostRequests(app);
}

module.exports.bindAllRequests = bindAllRequests;
