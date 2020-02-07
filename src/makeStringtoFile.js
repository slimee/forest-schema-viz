const fs = require('fs');

module.exports = (path = './forestadmin-schema.svg') => (data) =>
  fs.writeFile(path, data, function (err) {
    if (err) {
      return console.error(err);
    }
  });