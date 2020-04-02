import React, { useEffect, useRef } from "react"
import { List } from "antd"
import MessageItem from "./MessageItem"

interface IMessagesList {
  messagesData: MessageType[]
}

type MessageType = {
  author: string
  avatar: string
  text: string
  time: string
}

const MessagesList: React.FC<IMessagesList> = ({ messagesData }) => {
  console.log("messagesData: ", messagesData)
  const messageEl = useRef<HTMLLIElement>(null)

  const scrollToBottom = () => {
    if (messageEl.current !== null) {
      messageEl.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messagesData])

  return (
    <List
      className="comment-list"
      itemLayout="horizontal"
      locale={{ emptyText: "Сообщений нет" }}
      dataSource={messagesData}
      renderItem={item => (
        <li ref={messageEl}>
          <MessageItem
            author={item.author}
            avatar={item.avatar}
            text={item.text}
            time={item.time}
          />
        </li>
      )}
    />
  )
}

export default MessagesList
