import { AuthStateType, LoginSuccessType } from "./auth-types"

// Actions
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"

// Reducer
const initialState: AuthStateType = {
  isAuth: false,
  username: null
}

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { ...state, isAuth: true, username: action.payload }
    }

    default:
      return state
  }
}

// Action Creators

export const loginSuccess = (data: string): LoginSuccessType => ({
  type: LOGIN_SUCCESS,
  payload: data
})
