require('env2')('.env');

const { Pool } = require('pg');

let DB_URL = '';
const { NODE_ENV } = process.env;
if (NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
} else if (NODE_ENV === 'dev') {
  DB_URL = process.env.DEV_DB_URL;
} else {
  DB_URL = process.env.PRO_DB_URL;
}

if (!DB_URL) {
  throw new Error('DB URL does not exist');
}
console.log(DB_URL);
// const option = {
//   connectionString: DB_URL,
//   ssl: false,
// };

const option2 = {
  database: 'track_system',
  user: 'ibrahim',
  password: '123456',
  port: 5432,
  ssl: false,
};
const connection = new Pool(option2);
module.exports = connection;
