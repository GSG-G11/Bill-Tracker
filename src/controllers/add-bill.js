const { checkUserNameAndPassword, addNewBill } = require('../database/query');

const addBill = (req, res) => {
  const {
    userName, password, details, amount: amountStr, categoryId,
  } = req.body;
  const amount = Number(amountStr);
  if (userName && password && details && amount && categoryId) {
    return checkUserNameAndPassword(userName, password)
      .then((data) => {
        if (data.rows.length === 1) {
          if (categoryId > 0 && categoryId < 8) {
            if (typeof amount === 'number') {
              const userID = data.rows[0].id;
              return addNewBill({
                amount, details, userID, categoryId,
              })
                .then((data3) => res.json(data3.rows[0]));
            }
            return res.json({
              status: 'error',
              message: 'wrong amount value, amount value should be a number',
            });
          }
          return res.json({
            status: 'error',
            message: 'wrong category id',
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

module.exports = { addBill };
