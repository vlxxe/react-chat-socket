import { LOGIN_SUCCESS } from "./auth-reducer"

export type AuthStateType = {
  isAuth: boolean
  username: string | null
}

export type LoginSuccessType = {
  type: typeof LOGIN_SUCCESS
  payload: string
}
