import { createAction, createReducer } from "@reduxjs/toolkit"

export const loginSuccess = createAction<string, "auth/LOGIN_SUCCESS">(
  "auth/LOGIN_SUCCESS"
)

type AuthStateType = {
  isAuth: boolean
  username: string
}

const initialState: AuthStateType = {
  isAuth: false,
  username: "",
}

export const authReducer = createReducer(initialState, (builder) =>
  builder.addCase(loginSuccess, (state, action) => {
    state.isAuth = true
    state.username = action.payload
  })
)
