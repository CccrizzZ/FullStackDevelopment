const http = require("http"),
  url = require("url"),
  fs = require("fs"),
  io = require("socket.io")

const mongoose = require("mongoose")


// local host mongodb connecting string including which db to connect
const connectionString = "mongodb://localhost:27017/admin"   // connecting to admin db

// connect to mongo db
mongoose.connect(connectionString, { useNewUrlParser: true})
.then(
  () => {console.log("Mongoose connected successfully")},                // connected
  err => {console.log("Mongoose could not connect to database" + err)} // econnection error
)
  

// import mongoose schema
const Restaurant = require("./model/Restaurant")
const Order = require("./model/Order")





// create server
const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname
  switch (path) {
    case "/":
      fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) return send404(res)
        res.writeHead(200, {
          "Content-Type": path == "json.js" ? "text/javascript" : "text/html"
        })
        res.write(data, "utf8")
        res.end()
      })
      break

    default:
      send404(res)
  }
})


const send404 = function(res) {
  res.writeHead(404)
  res.write("404")
  res.end()
}

const PORT = 8080
server.listen(PORT, () => console.log(`server started on localhost:${PORT}`))

// socket.io, I choose you
const ioServer = io.listen(server)

// socket.io setup and manager
ioServer.on("connection", function(socket) {
  // now we have a client object!
  console.log("Connection accepted.")

  // event listeners
  socket.on("message", function(message) {
    console.log(`Recieved message: ${message} - from client`)
    socket.emit("msgreceived")
  })

  socket.on("disconnect", function() {
    console.log("Disconnected...")
  })



  // get restaurants event
  socket.on("get-restaurants", () => {
    console.log("server - get-restarants called")
  
    // filtering with keywords
    Restaurant.find({city: "Queens", cuisine: "Delicatessen"}, (error, documents) => {
      if(error){ 
        console.log(`Error occurred on Restaurant.find(): ${error}`)
      }

      if (documents.length == 0) {
        console.log("no record found")
        return
      }

      console.log(`Restaurant.find() returned documents: ${documents}`)
      
      // map data
      const data = documents.map(x => x.name)
      console.log(data)


      // emit the data to client
      socket.emit("restaurant-data", data)
    
    })
  })








  // place order request from client
  socket.on("place-order", (req) => {
    console.log("server - place-order called")
    // console.log(req.name + req.item)

    // return if no input from client
    if(req.name == null || req.item == null){
      socket.emit('order-feedback', "order not placed, please enter both name and item!")
      return
    }


    // construct new order
    const newOrder = new Order({
      order_id: "0",
      item: req.item,
      customer_name: req.name
    })
    

    // push it to database and return result
    newOrder.save().then((result) => {
      console.log(result)
      socket.emit('order-feedback', "order placed: " + result.item + " for " + result.customer_name )

    }).catch((err) => {
      console.log(err)
    })


  })


  // get order request from client
  socket.on("get-order", (req, res) => {
    console.log("server - get-order called")

    // mongo db find
    Order.find((error, result) => {

      // get all orders
      const data = result.map(x => x.item + " for " + x.customer_name)

      // emit the order data to the client
      socket.emit("order-data", data)
    })

  })


})
