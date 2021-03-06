require('env2')('.env');

const { Pool } = require('pg');

let ssl;
let DB_URL = '';
const { NODE_ENV } = process.env;
if (NODE_ENV === 'test') {
  DB_URL = process.env.TEST_DB_URL;
  ssl = false;
} else if (NODE_ENV === 'dev') {
  DB_URL = process.env.DEV_DB_URL;
  ssl = false;
} else {
  DB_URL = process.env.PRO_DB_URL;
  ssl = { rejectUnauthorized: false };
}

if (!DB_URL) {
  throw new Error('DB URL does not exist');
}
const option = {
  connectionString: DB_URL,
  ssl,
};

const connection = new Pool(option);
module.exports = connection;
