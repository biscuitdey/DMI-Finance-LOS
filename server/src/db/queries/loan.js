const rfr = require("rfr");
const connection = rfr("/server/db/index");


const getForm = (userId) => {
  const dbQuery = `SELECT st.title as step_title, s.title as section_title, f.*
          FROM steps st
          LEFT JOIN sections s ON s.step_id = st.id and st.is_visible = 1
          LEFT JOIN fields f ON f.section_id = s.id and f.is_visible = 1
          WHERE st.user_id = ? and s.is_visible = 1
          ORDER BY st.position, s.position, f.id;
        `;

  return new Promise((resolve, reject) => {
    connection.query(dbQuery, [userId], (err, result) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return reject(err);
      }
      resolve(result);
    });
  });
};

module.exports = {
  getForm
}
