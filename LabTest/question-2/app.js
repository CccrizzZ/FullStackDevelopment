
// import * as events from 'events'

let events = require('events')

// make a new event emitter
let ee = new events.EventEmitter()


let ping = () => {
  console.log('ping..')
}

let pong = () => {
  console.log('pong..')
}

ee.on('ping', ping)
ee.on('pong', pong)



let playGame = (num) => {

  // round number
  console.log("playing " + num + " rounds")

  // playing
  let i = 1
  let round = setInterval(() => {
    
    console.log("Round " + i);
    ee.emit('ping')
    ee.emit('pong')

    // clear interval if i reached round num
    if (i >= num) {
      clearInterval(round)

      // game over
      console.log("game is over...")
    }
    i++
  }, 1000)
}


playGame(4)