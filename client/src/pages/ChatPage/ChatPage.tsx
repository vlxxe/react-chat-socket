import React, { useEffect } from "react"
import io from "socket.io-client"

import MainLayout from "../../layouts/MainLayout/MainLayout"

interface Props {}

const ChatPage: React.FC = (props: Props) => {
  /* const server = "http://localhost:5000"

  useEffect(() => {
    const socket = io(server)
  }, [])

  const onSubmit = (e: any) => {
    console.log(e.target.value)
  } */

  return <MainLayout />
}

export default ChatPage
