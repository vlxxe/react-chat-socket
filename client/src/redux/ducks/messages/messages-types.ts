export type MessagesStateType = {
  mainChatMessages: MessageFromServerType[]
}

export type MessageFromServerType = {
  authorId?: string
  author: string
  text: string
  time: string
}
