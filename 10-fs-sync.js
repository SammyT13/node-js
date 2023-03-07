// Used the destructured method instead of '.' method
const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// This creates a file 'result-sync.txt' and adds the message plus first & second
    // This would override what is already existing in the file
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`)

console.log('done with the first task')

// This will do the same as above, but append to the file
    // Use keyword 'flag' and 'a' flag
writeFileSync('./content/append-result-sync.txt',
`Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log('done with the second task');
console.log('starting the next task');