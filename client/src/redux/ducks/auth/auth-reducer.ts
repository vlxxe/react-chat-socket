import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../../rootReducer"

type AuthStateType = {
  isAuth: boolean
  username: string
  socketId: string
}

const initialState: AuthStateType = {
  isAuth: false,
  username: "",
  socketId: "",
}

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuth = true
      state.username = action.payload
    },
    setSocketId: (state, action: PayloadAction<string>) => {
      state.socketId = action.payload
    },
  },
})

const { actions, reducer } = authReducer
export const { loginSuccess, setSocketId } = actions
export { reducer as authReducer }
