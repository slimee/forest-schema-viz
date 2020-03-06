const fs = require('fs');

module.exports = (path = './.forestadmin-schema.json') => Promise.resolve(JSON.parse(fs.readFileSync(path, 'utf8')));