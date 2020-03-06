#!/usr/bin/env node
const argv = require('yargs').argv;
const version = require('./package.json').version;
const jsonToSvg = require('./job/jsonToSvg');
const path = argv.path || '.forestadmin-schema.json';

console.log(`show-schema@${version}`, path);

jsonToSvg(path);