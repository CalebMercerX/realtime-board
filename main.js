const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
  socket.send(JSON.stringify({
    type: "connected",
    message: "Welcome to Realtime Board"
  }));
});
