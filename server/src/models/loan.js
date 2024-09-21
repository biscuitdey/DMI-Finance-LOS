const rfr = require('rfr');

const constant = rfr('/server/shared/constant');
const utils = rfr('/server/shared/utils');
const loanQuery = rfr('/server/db/queries/loan');

const loanForm = (req, res, cb) => {
	utils.writeInsideFunctionLog('step', 'loanForm', req.body);

  resObj = Object.assign({}, utils.getErrorResObj());
  loanQuery.getForm(req.params.id).then(res => {
    resObj = Object.assign({}, utils.getSuccessResObj());
    resObj["data"] = res;
    cb(resObj);
  }).catch(error => {
    cb(resObj);

  })

}

module.exports = {
	loanForm
}