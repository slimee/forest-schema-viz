const open = require('open');

module.exports = path => {
  console.log('opening', path, '...');
  open(path);
};