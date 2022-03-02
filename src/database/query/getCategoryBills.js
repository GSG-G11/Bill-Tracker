const connection = require('../config/connection');

const getCategoryBillsQuery = ({ userID, categoryId }) => connection.query({
  text: 'SELECT * FROM bills WHERE user_id=$1 AND category_id=$2;',
  values: [userID, categoryId],
});

module.exports = { getCategoryBillsQuery };
