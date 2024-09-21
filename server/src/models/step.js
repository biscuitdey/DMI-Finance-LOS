const rfr = require('rfr');

const constant = rfr('/server/shared/constant');
const utils = rfr('/server/shared/utils');
const stepQuery = rfr('/server/db/queries/step');

const saveSteps = (req, res, cb) => {
	utils.writeInsideFunctionLog('step', 'saveSteps', req.body);

  resObj = Object.assign({}, utils.getErrorResObj());
  stepQuery.save(req.body).then(res => {
    resObj = Object.assign({}, utils.getSuccessResObj());
    resObj["data"] = res.insertId;
    cb(resObj);
  }).catch(error => {
    cb(resObj);

  })

}

module.exports = {
	saveSteps
}