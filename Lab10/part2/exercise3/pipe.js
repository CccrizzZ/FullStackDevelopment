
const request = require('request')
const fs = require('fs')

// create file write stream for existing or new file
const writer = fs.createWriteStream('./output.html')

// pipe the request to the writer
// the request object is default a read stream
request('https://marketinsider.net/crypto').pipe(writer)


