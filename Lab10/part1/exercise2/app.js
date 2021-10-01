
const events = require('events')

const buff = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])

// create a new event emitter
let eventEmitter = new events.EventEmitter()


// register convert listener
eventEmitter.on('convert', (input) => {
    input.forEach(element => {
        console.log(element)
    })
    console.log("buffer converted")
})


// emit convert
eventEmitter.emit('convert', buff)
