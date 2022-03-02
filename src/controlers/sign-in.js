const connection = require('../database/config');

const signIN = (req, res) => {
  const { bb } = req.body;
  return connection.query({
    text: 'SELECT * FROM users WHERE username=$1 RETURNNING *;',
    values: [bb],
  }).then(res.json);
};

module.exports = signIN;
