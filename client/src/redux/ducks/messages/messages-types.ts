export type MessagesStateType = {
  mainChatMessages: MessageFromServerType[]
}

export type MessageFromServerType = {
  author: string
  text: string
  avatar: string
  time: string
}

export type MessageFromClientType = {
  author: string
  text: string
}
