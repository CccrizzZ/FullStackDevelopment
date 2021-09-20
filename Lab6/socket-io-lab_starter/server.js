let http = require('http')
  , url = require('url')
  , fs = require('fs')
  , io = require('socket.io')
  , server

// let Emitter = require("events").EventEmitter
// let ee = new Emitter

console.log("Server Running")

// create server
server = http.createServer(function(req, res){
  
  var path = url.parse(req.url).pathname;
  switch (path){
    case '/':
      // grab the index.html file and serve it
      fs.readFile(__dirname + '/index.html', function(err, data){
        if (err) return send404(res);
        res.writeHead(200, {'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html'})
        res.write(data, 'utf8');
        res.end();
        


      });
      break;

    default: send404(res);
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
var ioSocket = io.listen(server)

// send msg to client


// setup socket listeners here
let newConnection = () => {
  
}

// io.socket.on("connect", () => {

// })


let disconnected = () => {
  
}

let sendMsg = () => {

}

