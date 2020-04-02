import React, { useEffect, useState } from "react"

import MainLayout from "../../layouts/MainLayout/MainLayout"
import ChatInput from "../../components/ChatInput/ChatInput"
import MessagesList from "../../components/Messages/MessagesList"
/* import { socket } from "../../socket/socket" */

interface Props {}

type MessageType = {
  author: string
  avatar: string
  text: string
}

const ChatPage: React.FC = (props: Props) => {
  const [messagesData, setMessagesData] = useState<MessageType[]>([])

  const updateMessages = (data: MessageType) => {
    setMessagesData(prev => [...prev, data])
  }

  const sendMessage = (e: any) => {
    /* socket.emit("newMessage", {
      author: "Bot Vyacheslav",
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      text: e.target.value
    }) */
  }

  /* useEffect(() => {
    socket.on("message", updateMessages)
  }, []) */

  return (
    <MainLayout
      messages={<MessagesList messagesData={messagesData} />}
      input={<ChatInput onSubmit={sendMessage} />}
    />
  )
}

export default ChatPage
