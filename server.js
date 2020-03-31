const config = require("config")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = config.get("port") || 5000

io.on("connection", socket => {
  socket.emit("message", "Welcome to chat!")

  socket.broadcast.emit("message", "user has joined!")

  socket.on("disconnect", () => {
    io.emit("message", "user has left")
  })

  socket.on("newMessage", message => {
    console.log(message)
    io.sockets.emit("message", message)
  })
})

async function start() {
  try {
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (error) {
    console.log("Server error", error)
    process.exit(1)
  }
}

start()
