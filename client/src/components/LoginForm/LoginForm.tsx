import React from "react"
import { Form, Input, Button, Checkbox } from "antd"
import { useDispatch } from "react-redux"

import "./LoginForm.scss"
import { loginSuccess } from "../../redux/ducks/auth/auth-reducer"

interface Props {}

const LoginForm: React.FC = (props: Props) => {
  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    dispatch(loginSuccess(values.username))
    console.log("Success:", values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo)
  }

  return (
    <div className="login-form-container">
      <Form
        className="login-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h3 className="form-title">Добро пожаловать!</h3>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Необходимо ввести логин" }]}
        >
          <Input placeholder="Логин" />
        </Form.Item>

        {/* <Form.Item
          name="password"
          rules={[{ required: true, message: "Необходимо ввести пароль" }]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Вход
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default LoginForm