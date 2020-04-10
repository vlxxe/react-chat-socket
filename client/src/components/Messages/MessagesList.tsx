import React, { useEffect, useRef } from "react"
import { List } from "antd"

import MessageItem from "./MessageItem"
import { MessageFromServerType } from "../../redux/ducks/messages/messages-types"

interface IMessagesList {
  messages: MessageFromServerType[]
  userSocketId: string
}

const MessagesList: React.FC<IMessagesList> = ({ messages, userSocketId }) => {
  const messageEl = useRef<HTMLLIElement>(null)

  const scrollToBottom = () => {
    if (messageEl.current !== null) {
      messageEl.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <List
      className="comment-list"
      itemLayout="horizontal"
      locale={{ emptyText: "Сообщений нет" }}
      dataSource={messages}
      renderItem={(item) => (
        <li
          ref={messageEl}
          className={
            item.authorId === userSocketId ? "current-user-message" : ""
          }
        >
          <MessageItem author={item.author} text={item.text} time={item.time} />
        </li>
      )}
    />
  )
}

export default MessagesList
