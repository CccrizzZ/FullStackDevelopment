

// exercise 1
const st = require('./sportsteam')

st.teamname = 'Raptors'

st.Cheer()


// exercise 2
const calculator = require('./calculator')
const comparer = require('./comparer')

let a = 1
let b = 3

if (comparer.AreNumberEqual(a,b)) {
    console.log(calculator.Add(a,b))
}
else{
    console.log(calculator.Subtract(a,b))
}


// exercise 3
const events = require('events')
let eventEmitter = new events.EventEmitter()

let EFunc = () => {
    console.log("call me")
}

let EFunc2 = () => {
    console.log("another event function")
}

eventEmitter
    .on('call', EFunc)
    .on('call2', EFunc2)

eventEmitter.emit('call')
eventEmitter.emit('call2')



// exercise 4



