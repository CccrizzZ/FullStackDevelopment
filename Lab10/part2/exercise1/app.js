

// require file system
const fs = require('fs')

// create readable file stream
let stream = fs.createReadStream("data.txt")

// subscribe to "data" emitter in readable stream
stream.on('data', (data) => {
    console.log(data)            // binary datas in buffer
    console.log(data.toString()) // convert buffer to string

})



