import React, { useState } from "react"
import { Input } from "antd"

const { Search } = Input

interface IChatInputProps {
  onSubmit: (text: string) => void
}

const ChatInput: React.FC<IChatInputProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>("")

  const onPressEnter = (): void => {
    if (value.trim()) {
      onSubmit(value)
      setValue("")
    }
  }

  return (
    <Search
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Введите ваше сообщение..."
      onSearch={onPressEnter}
      enterButton="Отправить"
    />
  )
}

export default ChatInput
