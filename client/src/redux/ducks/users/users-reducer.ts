import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type user = {
  username: string
  room: string
  id: string
}

export type UsersStateType = {
  room: string
  users: user[]
}

const initialState: UsersStateType = {
  room: "",
  users: [],
}

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action: PayloadAction<UsersStateType>) => {
      state.users = action.payload.users
    },
  },
})

const { actions, reducer } = usersReducer
export const { updateUsers } = actions
export { reducer as usersReducer }
