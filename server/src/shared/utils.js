const rfr = require('rfr');

const constant = rfr('/server/shared/constant');
const config = rfr('/server/shared/config');
const logger = rfr('/server/shared/logger');

const sendResponse = (res, resObj) => { res.send(resObj); }

const getSuccessResObj = () => {
  var resObj = constant['RES_OBJ'];
  return {
    code: resObj['CODE']['SUCCESS'],
    status: resObj['STATUS']['SUCCESS'],
    message: resObj['MSG']['SUCCESS']
  }
}

const getErrorResObj = () => {
  var resObj = constant['RES_OBJ'];
  return {
    code: resObj['CODE']['FAIL'],
    status: resObj['STATUS']['FAIL'],
    message: resObj['MSG']['FAIL'],
    data: {}
  }
}

const log = (msg, value = null) => {
	if (config['showServerLog']) {
		console.log(msg, (value === null ? '' : value));
	}
}

const getStringifyObj = (obj = {}) => {
  try {
    return JSON.stringify(obj);
  } catch(ex) {
    writeErrorLog('utils', 'getStringifyObj', 'Exception while doing Stringify', ex);
    return obj;
  }
}

const writeErrorLog = (fileName, funName, msg, err, queryParam) => {
  let stringifyErr = getStringifyObj(err);
  if (queryParam) {
    logger.error(`[${fileName}] | <${funName}> - ${msg} with query ${getStringifyObj(queryParam)} --> ${stringifyErr}`);
  } else {
    logger.error(`[${fileName}] | <${funName}> - ${msg} --> ${stringifyErr}`);
  }
}

const writeInsideFunctionLog = (fileName, funName, params) => {
  if (params) {
    let strParams = getStringifyObj(params);
    logger.info(`[${fileName}] - Inside <${funName}> function with params ${strParams}`);
  } else {
    logger.info(`[${fileName}] - Inside <${funName}> function`);
  }
}

module.exports = {
	sendResponse,
	getSuccessResObj,
	getErrorResObj,
  getStringifyObj,
	log,
  writeErrorLog,
	writeInsideFunctionLog
}