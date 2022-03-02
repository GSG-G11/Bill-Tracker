const connection = require('../config/connection');

const addNewBill = ({
  amount, details, userID, categoryId,
}) => connection.query({
  text: 'INSERT INTO bills (amount,details,user_id,category_id) VALUES ($1,$2,$3,$4)  RETURNING *;',
  values: [amount, details, userID, categoryId],
});

module.exports = { addNewBill };
