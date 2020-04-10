const config = require("config")
const http = require("http")
const express = require("express")
const socketio = require("socket.io")
const formatMessage = require("./utils/formatMessage")
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = config.get("port") || 5000
const BOT_NAME = "ChatBot"
const BOT_ID = "Bot"

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(username, socket.id, room)
    socket.join(user.room)

    // Welcome to current user
    socket.emit(
      "newMessage",
      formatMessage(BOT_ID, BOT_NAME, `Добро пожаловать ${user.username}`)
    )
    // set socket to current user
    socket.emit("setSocketId", socket.id)

    // broadcast about joined user
    socket
      .to(user.room)
      .emit(
        "newMessage",
        formatMessage(
          BOT_ID,
          BOT_NAME,
          `Присоединился к каналу ${user.username}`
        )
      )

    // broadcast update room info
    io.in(user.room).emit("roomInfo", {
      room: user.room,
      users: getRoomUsers(user.room),
    })
  })

  // Listener on new messages
  socket.on("newMessage", (message) => {
    const user = getCurrentUser(socket.id)
    io.to(user.room).emit(
      "newMessage",
      formatMessage(socket.id, user.username, message)
    )
  })

  // on disconnect user
  socket.on("disconnect", () => {
    const user = userLeave(socket.id)

    if (user) {
      socket
        .to(user.room)
        .emit(
          "newMessage",
          formatMessage(BOT_ID, BOT_NAME, `Вышел из канала ${user.username}`)
        )

      socket.to(user.room).emit("roomInfo", {
        room: user.room,
        users: getRoomUsers(user.room),
      })
    }
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
