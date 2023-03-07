// Path Module

const path = require('path')

// Returns '/' the deliminator
console.log(path.sep)

// Returns the path of folder
const filePath = path.join('/content','subfolder', 'test.txt')
console.log(filePath)

// Returns the base name of file
const base = path.basename(filePath)
console.log(base)

// Returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)