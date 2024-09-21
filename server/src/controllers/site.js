const rfr = require('rfr');

const siteModel = rfr('/server/models/site');
const utils = rfr('/server/shared/utils');

siteConfigurations = (req, res) => {
  let cb = function(result) {
    utils.sendResponse(res, result);
  }
  siteModel.siteConfigurations(req, res, cb);
}

module.exports = {
  siteConfigurations
}
