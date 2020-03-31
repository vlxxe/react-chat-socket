import { combineReducers, Reducer } from "redux"
import { authReducer } from "./ducks/auth/auth-reducer"
import { AuthStateType } from "./ducks/auth/auth-types"

export type AppStateType = {
  auth: AuthStateType
}

export const rootReducer: Reducer<AppStateType> = combineReducers<AppStateType>(
  {
    auth: authReducer
  }
)
