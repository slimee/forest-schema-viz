const Viz = require('viz.js');
const { Module, render } = require('../vendor/full.render.js');
const path = require('path');
const Worker = require('tiny-worker');

let worker = new Worker(path.resolve(__dirname, '../vendor/full.render.js'));
let viz = new Viz({ worker });

module.exports = graphvizGraph => viz
  .renderString(graphvizGraph)
  .then((result) => {
    worker.terminate();
    return result;
  });