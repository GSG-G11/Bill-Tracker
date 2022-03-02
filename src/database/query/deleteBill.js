const connection = require('../config/connection');

const deleteBillQuery = ({
  billId, userId,
}) => connection.query({
  text: 'DELETE FROM bills WHERE id=$1 AND user_id=$2;',
  values: [billId, userId],
});

module.exports = { deleteBillQuery };
