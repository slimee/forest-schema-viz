const version = require('../package.json').version;
const findForestSchema = require('./findForestSchema');
const forestSchemaToGraph = require('./forestSchemaToGraph');
const graphToSvgString = require('./graphToSvgString');
const makeStringToFile = require('./makeStringtoFile');
const makeFileToBrowser = require('./makeFileToBrowser');

const stringToFile = makeStringToFile();
const fileToBrowser = makeFileToBrowser();

module.exports = () => findForestSchema()
  .then(forestSchemaToGraph)
  .then(graphToSvgString)
  .then(stringToFile)
  .then(fileToBrowser)
  .catch(error => console.error(error));