const config = require("config")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")
const formatMessage = require("./utils/formatMessage")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = config.get("port") || 5000
const BOT_NAME = "ChatBot"

io.on("connection", (socket) => {
  socket.on("joinMainRoom", (username) => {
    // Welcome to current user
    socket.emit(
      "newMessage",
      formatMessage(BOT_NAME, `Добро пожаловать в чат ${username}`)
    )

    // Broadcast on connection user
    socket.broadcast.emit(
      "newMessage",
      formatMessage(BOT_NAME, `${username} присоединился`)
    )

    // Broadcast on disconnection user
    socket.on("disconnect", () => {
      io.emit("newMessage", formatMessage(BOT_NAME, `${username} Вышел`))
    })

    socket.on("newMessage", (message) => {
      io.sockets.emit("newMessage", formatMessage(message.author, message.text))
    })
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
