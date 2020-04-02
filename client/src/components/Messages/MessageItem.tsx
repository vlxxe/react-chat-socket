import React from "react"
import { Comment, Avatar, Tooltip } from "antd"
import moment from "moment"
import "./MessageItem.scss"
interface IMessageItem {
  author: string
  avatar: string
  text: string
  datetime?: string
  time: string
}

const MessageItem: React.FC<IMessageItem> = ({
  author,
  avatar,
  text,
  time
}) => {
  return (
    <Comment
      className="message"
      author={<a>{author}</a>}
      avatar={<Avatar src={avatar} alt={author} />}
      content={<p>{text}</p>}
      datetime={
        <Tooltip
          title={moment()
            .subtract(2, "days")
            .format("YYYY-MM-DD HH:mm:ss")}
        >
          <span>
            {time}
            {/* {moment()
              .subtract(2, "days")
              .fromNow()} */}
          </span>
        </Tooltip>
      }
    />
  )
}

export default MessageItem
