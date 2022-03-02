const connection = require('../config/connection');

const getAllUserBillsQuery = ({ userID }) => connection.query({
  text: 'SELECT * FROM bills WHERE user_id=$1;',
  values: [userID],
});
module.exports = { getAllUserBillsQuery };
