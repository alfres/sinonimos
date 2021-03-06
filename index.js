var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static('public'))
app.use(express.static('js'))
app.use(express.static('css'))
app.use(express.static('listas'))

app.get('/', function(request, response) {

  response.sendFile( __dirname + "/" + "index.htm");
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
