const connection = require('../config/connection');

const checkUserNameAndPassword = (userName, password) => connection.query({
  text: 'SELECT * FROM users WHERE user_name=$1 AND password=$2',
  values: [userName, password],
});

module.exports = { checkUserNameAndPassword };
