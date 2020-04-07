import { createAction, createReducer } from "@reduxjs/toolkit"

import { MessagesStateType, MessageFromServerType } from "./messages-types"

export const messageReceived = createAction<MessageFromServerType>(
  "messages/MESSAGE_RECEIVED"
)

export const messageSending = createAction<string>("messages/MESSAGE_SENDING")

const initialState: MessagesStateType = {
  mainChatMessages: [],
}

export const messagesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(messageReceived, (state, action) => {
      state.mainChatMessages.push(action.payload)
    })
    .addCase(messageSending, (state, action) => {
      return state
    })
)
