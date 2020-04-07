import { combineReducers } from "@reduxjs/toolkit"

import { authReducer } from "./ducks/auth/auth-reducer"
import { messagesReducer } from "./ducks/messages/messages-reducer"
import { usersReducer } from "./ducks/users/users-reducer"

export const rootReducer = combineReducers({
  authStore: authReducer,
  messagesStore: messagesReducer,
  usersStore: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
