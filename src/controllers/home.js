const { join } = require('path');

const homeHandel = (req, res) => {
  res.sendFile(join(__dirname, '../../public/html/home.html'));
};

module.exports = { homeHandel };
