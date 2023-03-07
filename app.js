// NPM

// npm: global command, comes with node
// To know version: $ npm --version

// local dependency: use it only in this particular project (used more frequently)
// Command: $ npm i <packageName>

// global dependency: us it in any project
// Command: $ npm install -g <packageName>
// Command: $ sudo npm install -g <packageName> (mac)

// package.json: manifest file (stores important info about project/package)
// To Create json package: (Three Methods)
// Manual Approach: create package.json in the ROOT, create properties etc
// Alternative: $ npm init (step by step, press enter to skip)
// Default: $ npm init -y

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flatMapDeep(items) // to flatten an array 
console.log(newItems)
