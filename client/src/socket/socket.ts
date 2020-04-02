import io from "socket.io-client"

const server = "http://localhost:5000"
/* const server = "http://localhost:5000"
export let socket = io.connect(server) */
export let socket: SocketIOClient.Socket

export const createSocket = () => {
  socket = io.connect(server)
}

/* const server = "http://localhost:5000"
  const socket = io(server)
  useEffect(() => {
    socket.on("message", (message: string) => {
      console.log("mes from serv: ", message)
    })
  }, []) */
