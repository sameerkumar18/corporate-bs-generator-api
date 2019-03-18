const express = require('express');
const buzzwords = require('./buzzwords');
const cors = require('cors');
const app = express();
app.use(cors({credentials: true, origin: true}));

app.get('/', function(request, response) {
  response.send({'phrase':buzzwords.buzzwords()})
});
app.listen(process.env.PORT || 3000, () => console.log('Listening...'));
