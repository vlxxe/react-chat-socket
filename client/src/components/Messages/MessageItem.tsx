import React from "react"
import { Comment, Tooltip } from "antd"

import "./MessageItem.scss"
import { MessageFromServerType } from "../../redux/ducks/messages/messages-types"

const MessageItem: React.FC<MessageFromServerType> = ({
  author,
  text,
  time,
}) => {
  return (
    <Comment
      className="message"
      avatar={false}
      author={
        <a>
          <b>{author}</b>
        </a>
      }
      content={<p>{text}</p>}
      datetime={<span>{time}</span>}
    />
  )
}

export default MessageItem
