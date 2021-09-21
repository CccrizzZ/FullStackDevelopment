
let http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , server



console.log("Server Running")

// create server
server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      // grab the index.html file and serve it as root
      fs.readFile(__dirname + '/index.html', function(err, data){
        if (err) return send404(res)
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
        res.write(data, 'utf8')
        res.end()
        


      })
      break

    default: send404(res)
  }
})


// 404 method
let send404 = (res) => {
  res.writeHead(404)
  res.write('404')
  res.end()
}


// listen to port
server.listen(8080)


// socket.io setup
let ioSocket = io.listen(server)

// send msg to client


// on client connection
ioSocket.on('connect', socket => {
  console.log(`Client connected: ${socket.id}`)
  
  // client custom event for messages
  socket.on('sendmsg', (msg) => {
    console.log(msg)
  })

  socket.on('dip', (msg) => {
    console.log(`Client disconnected: ${socket.id}`)
    socket.disconnect()
  })


})




// on client disconnection
ioSocket.on('disconnect', (data) => {
  console.log('client disconnected: ' + data.id)
})
