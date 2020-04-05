import React from "react"
import { useSelector, useDispatch } from "react-redux"

import MainLayout from "../../layouts/MainLayout/MainLayout"
import ChatInput from "../../components/ChatInput/ChatInput"
import MessagesList from "../../components/Messages/MessagesList"
import { RootState } from "../../redux/rootReducer"
import { messageSending } from "../../redux/ducks/messages/messages-reducer"

const ChatPage: React.FC = () => {
  const dispatch = useDispatch()
  const messages = useSelector(
    (state: RootState) => state.messagesStore.mainChatMessages
  )

  const username = useSelector((state: RootState) => state.authStore.username)

  const sendMessage = (text: string) => {
    dispatch(messageSending({ author: username, text }))
    text = ""
  }

  return (
    <MainLayout
      messages={<MessagesList messages={messages} />}
      input={<ChatInput onSubmit={sendMessage} />}
    />
  )
}

export default ChatPage
