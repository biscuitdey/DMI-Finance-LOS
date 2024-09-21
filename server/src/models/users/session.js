const rfr = require('rfr');

const constant = rfr('/server/shared/constant');
const utils = rfr('/server/shared/utils');

const login = (req, res, cb) => {
	utils.writeInsideFunctionLog('session', 'login', req.body);

	let email = req.body.email.trim(),
	password = req.body.password.trim(),
	resObj = Object.assign({}, utils.getErrorResObj());

	if (email && password) {
		resObj = Object.assign({}, utils.getSuccessResObj());
		cb(resObj);
	} else {
		resObj['message'] = constant['EMAIL_PASS_ERROR'];
		cb(resObj);
	}
}

module.exports = {
	login
}