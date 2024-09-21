const rfr = require('rfr');

const constant = rfr('/server/shared/constant');
const utils = rfr('/server/shared/utils');

const siteConfigurations = (req, res, cb) => {
	utils.writeInsideFunctionLog('site', 'siteConfigurations', req.body);


  resObj = Object.assign({data: {fontFamily: 'Arial',
  fontSize: '16px',
  primaryColor: 'red',
  secondaryColor: '#FFFFFF',
  backgroundColor: '#F0F0F0',
  buttonColor: '#007BFF'}}, utils.getSuccessResObj());
  cb(resObj);

}

module.exports = {
	siteConfigurations
}