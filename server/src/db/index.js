// Import the MySQL module
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',      // Database host
  user: 'root',           // Database username
  password: 'root',   // Database password
  database: 'flexiLOS'// Database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

process.on('SIGINT', () => {
  connection.end((err) => {
if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('MySQL connection closed.');
    }
    process.exit(err ? 1 : 0);
  });
});

process.on('SIGTERM', () => {
  connection.end((err) => {
if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('MySQL connection closed.');
    }
    process.exit(err ? 1 : 0);
  });
});

module.exports = connection;