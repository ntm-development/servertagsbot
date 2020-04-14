const express = require('express');
const db = require('quick.db')
const app = express();
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app and Bot is listening on port ' + listener.address().port);
});

require("./index.js") //(Turn on bot from here)

//For Debug, you can view all Tags from Every Server via API Json Format. (See Readme)
let tagslist = db.all().filter(data => data.ID.startsWith(`tags`)).sort((a, b) => b.data - a.data);

var tagslists = function () {
  app.get('/api/tags', async function (req, res) {
    res.send(tagslist)
  })
} 
tagslists();

