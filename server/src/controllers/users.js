const rfr = require('rfr');

const sessionModel = rfr('/server/models/users/session');
const utils = rfr('/server/shared/utils');

login = (req, res) => {
  let cb = function(result) {
    utils.sendResponse(res, result);
  }
  sessionModel.login(req, res, cb);
}

module.exports = {
  login
}
