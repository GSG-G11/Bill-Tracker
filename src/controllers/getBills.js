const { checkUserNameAndPassword, getAllUserBillsQuery, getCategoryBillsQuery } = require('../database/query');

const getBills = (req, res) => {
  const {
    userName, password, categoryId,
  } = req.body;
  return checkUserNameAndPassword(userName, password)
    .then((data) => {
      if (data.rows.length === 1) {
        const userID = data.rows[0].id;
        if (Number(categoryId) === 0) {
          return getAllUserBillsQuery({ userID })
            .then((allBills) => res.json(allBills.rows));
        } if (categoryId > 0 && categoryId < 8) {
          return getCategoryBillsQuery({ userID, categoryId })
            .then((categoryBills) => res.json(categoryBills.rows));
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
};

module.exports = { getBills };
