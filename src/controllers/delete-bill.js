const { checkUserNameAndPassword, deleteBillQuery } = require('../database/query');

const deleteBill = (req, res) => {
  const {
    userName, password, billId,
  } = req.body;
  if (userName && password && billId) {
    return checkUserNameAndPassword(userName, password)
      .then((data) => {
        if (data.rows.length === 1) {
          const userId = data.rows[0].id;
          return deleteBillQuery({ billId, userId })
            .then((data2) => {
              if (data2.rowCount === 1) {
                return res.json({
                  status: 'deleted',
                  message: 'deleted',
                });
              }
              return res.json({
                status: 'error',
                message: 'wrong bill id ',
              });
            });
        }
        return res.json({
          status: 'error',
          message: 'wrong username or wrong password or wrong bill id ',
        });
      });
  } return res.json({
    status: 'error',
    message: 'invalid input',
  });
};

module.exports = { deleteBill };
