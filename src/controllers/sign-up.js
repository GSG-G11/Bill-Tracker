const { connection } = require('../database/config');

const signUp = (req, res) => { // refactor later
  const { userName, password, confirmPass } = req.body;
  if (userName && password && confirmPass) {
    if (password === confirmPass) {
      return connection.query({
        text: 'SELECT * FROM users WHERE user_name=$1',
        values: [userName],
      })
        .then((data) => {
          if (data.rows.length === 0) {
            return connection.query({
              text: 'INSERT INTO users (user_name,password) VALUES ($1,$2) RETURNING *;',
              values: [userName, password],
            })
              .then((data2) => res.json({
                status: 'created',
                data: data2.rows[0],
              }));
          }

          return res.json({
            status: 'error',
            messeage: 'username has already taken, try another one',
          });
        });
    }
    return res.json({
      status: 'error',
      messeage: 'password and its confirmation should be match',
    });
  }
  return res.json({
    status: 'error',
    messeage: 'invalid input',
  });
};

module.exports = { signUp };
