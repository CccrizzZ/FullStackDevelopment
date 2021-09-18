
// exercise 5
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Slot Mechine\n")


    if (req.url.match("spin")) {
        console.log("spinning...")
    }else if(req.url.match("play")){
        console.log("playing...")
    }
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})

