const { join } = require('path');

const userErrorHandel = (req, res) => {
  res.status(404).sendFile(join(__dirname, '../../public/html/404.html'));
};

const serverErrorHandel = (req, res) => {
  res.status(500).sendFile(join(__dirname, '../../public/html/500.html'));
};

module.exports = { userErrorHandel, serverErrorHandel };
