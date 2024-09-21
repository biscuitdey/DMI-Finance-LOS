const rfr = require('rfr');

const loanModel = rfr('/server/models/loan');
const utils = rfr('/server/shared/utils');

loanForm = (req, res) => {
  let cb = function(result) {
    utils.sendResponse(res, result);
  }
  loanModel.loanForm(req, res, cb);
}

module.exports = {
  loanForm
}
