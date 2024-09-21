const rfr = require('rfr');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('./shared/logger');

const config = rfr('/server/shared/config');
const utils = rfr('/server/shared/utils');
const routes = rfr('/server/routes');
const db = rfr('/server/db/index')


// initialize our application
function start() {
  let app = express();

  app.use(express.static(path.join(__dirname, "../client/build")));
  app.use(bodyParser.json({limit: '500mb'})); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" })); // support encoded bodies

  //To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  let PORT = config['server']['port'];
  http.createServer(app).listen(PORT, function() {
    utils.log('Server started successfully on port -->', PORT);
    routes.bindAllRequests(app);
  });
}


module.exports.start = start;