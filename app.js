const express = require('express')
const buzzwords = require('./buzzwords')
const app = express()
app.get('/', function(request, response) {
  response.send({'data':buzzwords.buzzwords()})
})
app.listen(3000, () => console.log('Listening on port 3000!'))