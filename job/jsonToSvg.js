const readForestSchema = require('./readForestSchema');
const forestSchemaToGraph = require('./forestSchemaToGraph');
const graphToSvgString = require('./graphToSvgString');
const makeStringToFile = require('./makeStringtoFile');
const fileToBrowser = require('./fileToBrowser');

module.exports = path => readForestSchema(path)
  .then(forestSchemaToGraph)
  .then(graphToSvgString)
  .then(makeStringToFile(path))
  .then(fileToBrowser)
  .catch(error => console.error(error));