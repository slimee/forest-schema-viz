const fs = require('fs');

module.exports = (path = './.forestadmin-schema.json') => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err)
      reject(err);
    else
      resolve(JSON.parse(data));
  });
});