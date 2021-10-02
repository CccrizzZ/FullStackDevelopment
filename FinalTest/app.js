const fs = require('fs')

// read stream
let read = fs.createReadStream('./data.txt')

// write stream
let write = fs.createWriteStream('./output.txt')


read.on('end', () => {
  console.log("write is complete!")
})

// read data event
read.on('data', (data) => {
  console.log(data)
  console.log(data.toString())

  // write the data
  write.write(data)
})
