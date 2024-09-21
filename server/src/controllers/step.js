const rfr = require('rfr');

const stepModel = rfr('/server/models/step');
const utils = rfr('/server/shared/utils');

save = (req, res) => {
  let cb = function(result) {
    utils.sendResponse(res, result);
  }
  stepModel.saveSteps(req, res, cb);
}

module.exports = {
  save
}
