export type MessagesStateType = {
  mainChatMessages: MessageFromServerType[]
}

export type MessageFromServerType = {
  author: string
  text: string
  time: string
}
