import { createAction, createReducer } from "@reduxjs/toolkit"

export const updateUsers = createAction<UsersStateType, "users/UPDATE_USERS">(
  "users/UPDATE_USERS"
)

type user = {
  username: string
  room: string
  id: string
}

type UsersStateType = {
  room: string
  users: user[]
}

const initialState: UsersStateType = {
  room: "",
  users: [],
}

export const usersReducer = createReducer(initialState, (builder) =>
  builder.addCase(updateUsers, (state, action) => {
    state.users = action.payload.users
  })
)
