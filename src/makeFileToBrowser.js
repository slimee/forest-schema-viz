const open = require('open');

module.exports = (path = './forestadmin-schema.svg') => () => open(path);