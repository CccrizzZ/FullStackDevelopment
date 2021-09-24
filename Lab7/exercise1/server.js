

let express = require('express')
let app = express()

app.listen(3000)

app.get('/html', (req, res) => {
    res.send('<html><head></head><body><h1>Hello World</h1></body></html>')
})

app.get('/json', (req, res) => {
    res.json({firstname: 'John', lastname: 'Smith'})
})

app.get('/toronto+team', (req, res) => {
    res.send('<html><head></head><body><h1>Go Toronto</h1></body></html>')
})

app.get('/toronto*team', (req, res) => {
    res.send('<html><head></head><body><h1>Go !</h1></body></html>')
})



