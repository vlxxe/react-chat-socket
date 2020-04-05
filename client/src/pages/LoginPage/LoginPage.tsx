import React from "react"
import { useDispatch } from "react-redux"

import LoginForm from "../../components/LoginForm/LoginForm"
import { loginSuccess } from "../../redux/ducks/auth/auth-reducer"

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const onSubmit = (username: string) => dispatch(loginSuccess(username))

  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginPage
