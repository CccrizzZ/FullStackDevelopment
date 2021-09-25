var express = require('express')
var bodyParser = require('body-parser')



var router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/', function(req, res, next) {
  res.send('respond with a resource')
  
})


router.post('/', (req, res, next) => {

  res.send("POST received")
  

  console.log("First name: " + req.query.firstname)
  console.log("Last name: " + req.query.lastname)

})






module.exports = router
