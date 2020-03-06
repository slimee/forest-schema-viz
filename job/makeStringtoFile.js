const fs = require('fs');

module.exports = (jsonPath) => (data) => {
  const path = `${jsonPath}.svg`;
  fs.writeFileSync(path, data);
  return path;
};