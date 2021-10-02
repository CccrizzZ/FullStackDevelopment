const fs = require('fs')
const zlib = require('zlib')
const stream = require('stream')

// init gzip
let gzip = zlib.createGzip()

// read stream
let read = fs.createReadStream('./output.txt')

// write stream
let write = fs.createWriteStream('./output.txt.gz')

// stream.pipeline(read, gzip, write)
stream.pipeline(read, gzip, write, (err) => {
  if (err) {
    console.error(err)
    process.exitCode = 1
  }
})