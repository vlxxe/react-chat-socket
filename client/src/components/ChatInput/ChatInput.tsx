import React, { ReactElement } from "react"
import { Input } from "antd"

interface IChatInputProps {
  onSubmit: (e: any) => void
}

const ChatInput: React.FC<IChatInputProps> = ({ onSubmit }) => {
  return (
    <Input
      placeholder="Введите ваше сообщение..."
      onPressEnter={e => onSubmit(e)}
    />
  )
}

export default ChatInput
