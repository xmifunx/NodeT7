const fs = require('fs');
const os = require('os');

module.exports = (req, res) => {
  res.status(404);
  res.json('404 | страница не найдена');
}