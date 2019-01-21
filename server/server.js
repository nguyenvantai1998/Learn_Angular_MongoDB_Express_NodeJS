const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./routes/api')
const app = express()

app.use('/api', api)
app.use('/',function(req, res){
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log('Sever running on localhost:' + PORT)
})