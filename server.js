const config = require("config")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")
const moment = require("moment")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = config.get("port") || 5000

io.on("connection", socket => {
  /* socket.emit("message", {
    author: "Bot Vyacheslav",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    text: "Добро пожаловать в чат"
  })

  socket.broadcast.emit("message", {
    author: "Bot Vyacheslav",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    text: "Юзер присоединился!"
  })

  socket.on("disconnect", () => {
    io.emit("message", {
      author: "Bot Vyacheslav",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      text: "Юзер Вышел"
    })
  }) */

  socket.on("newMessage", message => {
    console.log(message)
    io.sockets.emit("message", { ...message, time: moment().format("HH:mm") })
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
