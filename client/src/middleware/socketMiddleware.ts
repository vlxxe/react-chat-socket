import io from "socket.io-client"

import { loginSuccess } from "../redux/ducks/auth/auth-reducer"
import {
  messageReceived,
  messageSending,
} from "../redux/ducks/messages/messages-reducer"
import { MessageFromServerType } from "../redux/ducks/messages/messages-types"

const server = "http://localhost:5000"

const socketMiddleware = () => {
  let socket: SocketIOClient.Socket | null = null

  return ({ dispatch }) => (next) => (action) => {
    switch (action.type) {
      case loginSuccess.toString():
        if (socket !== null) {
          socket.close()
        }

        socket = io.connect(server)
        // join in main room
        socket.emit("joinMainRoom", action.payload)
        // listener for all new messages
        socket.on("newMessage", (message: MessageFromServerType) => {
          dispatch(messageReceived(message))
        })

        return next(action)

      case messageSending.toString():
        //send message from user
        socket?.emit("newMessage", action.payload)

        return next(action)

      default:
        return next(action)
    }
  }
}

export default socketMiddleware

/*
let connect_error_count = 0

export let socket: SocketIOClient.Socket

export const createSocket = () => {
  socket = io.connect(server)

  socket.on("connect_error", () => {
    console.log("Connection Failed")
    connect_error_count++

    if (connect_error_count >= 2) {
      socket.disconnect()
      console.log("stop reconection")
    }
  })

  socket.on("connect", () => {
    console.log(socket.connected)
  })
} */
