

let express = require('express')
let app = express()

app.listen(3000)


let requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)


app.get('/greet', (req, res) => {
    console.log('GET received: ' + req.requestTime)
    res.send('hello world ' + req.requestTime)
})

app.post('/', (req, res) => {
    res.send('posting')
})

app.put('/', (req, res) => {
    res.send('putting')
})

app.delete('/', (req, res) => {
    res.send('deleting')
})

