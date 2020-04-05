import { combineReducers } from "@reduxjs/toolkit"

import { authReducer } from "./ducks/auth/auth-reducer"
import { messagesReducer } from "./ducks/messages/messages-reducer"

export const rootReducer = combineReducers({
  authStore: authReducer,
  messagesStore: messagesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
