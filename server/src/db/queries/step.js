const rfr = require("rfr");
const connection = rfr("/server/db/index");


const save = (reqBody) => {
  const { user_id, title, position, is_visible } = reqBody;
  const dbQuery = 'INSERT INTO steps(user_id, title, position, is_visible) VALUES (?, ?, ?, ?)';

  return new Promise((resolve, reject) => {
    connection.query(dbQuery, [user_id, title, position, is_visible], (err, result) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  save
}
