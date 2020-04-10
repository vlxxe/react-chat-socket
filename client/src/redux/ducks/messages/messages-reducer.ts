import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { MessagesStateType, MessageFromServerType } from "./messages-types"

const initialState: MessagesStateType = {
  mainChatMessages: [],
}

const messagesReducer = createSlice({
  name: "messages",
  initialState,
  reducers: {
    messageReceived: (state, action: PayloadAction<MessageFromServerType>) => {
      state.mainChatMessages.push(action.payload)
    },
    messageSending: (state, action: PayloadAction<string>) => {
      // we get this message from server
      return state
    },
  },
})

const { actions, reducer } = messagesReducer
export const { messageReceived, messageSending } = actions
export { reducer as messagesReducer }
