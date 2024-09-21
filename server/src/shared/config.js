const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

const env = dotenv.config({path: '.env'}),
// parsedEnv = dotenvParseVariables(env.parsed);
parsedEnv = dotenvParseVariables(process.env); // to use vscode environment variable for debug

const server = {
  host: parsedEnv.SERVER_HOST,
  port: parsedEnv.SERVER_PORT
};

showServerLog = parsedEnv.SHOW_SERVER_LOG;

const database = {
  host: parsedEnv.DB_HOST,
  port: parsedEnv.DB_PORT,
  db: parsedEnv.DB_NAME,
  username: parsedEnv.DB_USER,
  password: parsedEnv.DB_PASS
};

const facebook = {
  clientID: "INSERT-CLIENT-ID-HERE",
  clientSecret: "INSERT-CLIENT-SECRET-HERE",
  callbackURL: "http://localhost:8000/auth/facebook/callback",
  profileFields: ["id", "name", "displayName", "picture", "email"]
}

const google = {
  clientID: "INSERT-CLIENT-ID-HERE",
  clientSecret: "INSERT-CLIENT-SECRET-HERE",
  callbackURL: "http://localhost:8000/auth/google/callback"
}

module.exports = {
  server,
  showServerLog,
  database,
  facebook,
  google
};