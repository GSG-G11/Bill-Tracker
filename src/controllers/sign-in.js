const connection = require('../database/config');

const signIN = (req, res) => {
  const { userName, password } = req.body;
  if (userName && password) {
    return connection.query({
      text: 'SELECT * FROM users WHERE user_name=$1 AND password=$2  RETURNING *;',
      values: [userName, password],
    })
      .then((data) => {
        if (data.rows.length === 1) {
          return res.json({
            status: 'authenticated',
            data: data.rows[0],
          });
        }
        return res.json({
          status: 'error',
          message: 'wrong username or wrong password  ',
        });
      });
  }
  return res.json({
    status: 'error',
    message: 'invalid input',
  });
};

module.exports = signIN;
