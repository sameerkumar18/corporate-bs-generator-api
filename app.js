const express = require('express')
const buzzwords = require('./buzzwords')
const app = express()
app.get('/', function(request, response) {
  response.send({'phrase':buzzwords.buzzwords()})
})
app.listen(process.env.PORT || 3000, () => console.log('Listening...'))
