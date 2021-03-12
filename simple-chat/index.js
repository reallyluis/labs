const app = require('express')();
const http = require('http').createServer(app);

app.get('/*', (req, res) => {
  if (req.url) {
    try {
      res.sendFile(__dirname + req.url);
    } catch (e) {
      console.log(e);
    }
  } else {
    res.sendFile(__dirname + '/index.html');
  }
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});