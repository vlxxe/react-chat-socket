import React from "react"
import { Comment, Avatar, Tooltip } from "antd"
import moment from "moment"

import "./MessageItem.scss"
import { MessageFromServerType } from "../../redux/ducks/messages/messages-types"

const MessageItem: React.FC<MessageFromServerType> = ({
  author,
  avatar,
  text,
  time,
}) => {
  return (
    <Comment
      className="message"
      author={<a>{author}</a>}
      /* avatar={<Avatar src={avatar} alt={author} />} */
      content={<p>{text}</p>}
      datetime={
        <Tooltip
          title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
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
