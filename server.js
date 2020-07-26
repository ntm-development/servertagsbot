const express = require('express');
const db = require('quick.db')
require("dotenv").config();

const app = express();

require("./index.js") //(Turn on bot from here)

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Server Tags is now listening on port ' + listener.address().port);
});


app.get('/api/tags', async function (req, res) {
  let tagslist = db.all().filter(data => data.ID.startsWith(`tags`)).sort((a, b) => b.data - a.data);
  res.send(tagslist);
});