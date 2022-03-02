require('env2')('.env');

const { POOL } = require('pg');

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
const option = {
  connectionString: DB_URL,
  ssl: false,
};
const connection = new POOL(option);
module.exports = connection;
