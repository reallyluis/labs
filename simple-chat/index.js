const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});