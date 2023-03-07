// GLOBALS - NO WINDOW !!!

// __dirname: path to current directory
// __filename: file name
// require: function to use modules (CommonJs)
// module: info about current module (file)
// process: info about env where the program is being executed

// logs the current directory path
console.log(__dirname)

// prints hello world every second
setInterval(() => {
console.log('hello world')
}, 1000)