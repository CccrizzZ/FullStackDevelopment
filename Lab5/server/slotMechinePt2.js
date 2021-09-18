
// challenge
// include packages
const http = require('http')
const url = require('url')
const events = require('events')

// constants
const hostname = '127.0.0.1'
const port = 3000

// variables
let eventEmitter = new events.EventEmitter()
let amount = 0


// event functions
const jackpotEvent = () => {
    console.log("Jackpot")
}


// bind event
eventEmitter.on('max', jackpotEvent)



// construct sever
const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Slot Mechine\n")


    // match the url with keywords
    if (req.url.match("spin")) {
        console.log("spinning...")

        // trigger the event
        if(!eventEmitter.emit(amount))
        {
            console.log("amount lost: " + amount)
        }
        
        
    }else if(req.url.match("play")){
        
        // get the amount parameter
        currentURL = new URL('http://' + hostname + ':' + port + req.url)
        params = currentURL.searchParams
        amount = params.get('amount')
        console.log("playing... " + "amount: " + amount)
        

    }
    


})


// run server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})

