var express = require('express')
var bodyParser = require('body-parser')



var router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.post('/', (req, res, next) => {
  res.send('posting')
})




module.exports = router
