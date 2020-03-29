const config = require("config")
const express = require("express")
const socketio = require("socket.io")

const app = express()
const io = socketio()

const PORT = config.get("port") || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
