const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf8' })
// default 64kb
// last buffer: is the remainder of bit.txt file
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000}) --> this controls the default buffer
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' }) --> this allows us to see the data

stream.on('data', (result) => {
    console.log(result)
})

// this is the error event
stream.on('error', (err) => {
    console.log(result)
})