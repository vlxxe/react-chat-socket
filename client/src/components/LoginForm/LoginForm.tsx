import React from "react"
import { Form, Input, Button, Checkbox } from "antd"

import "./LoginForm.scss"

interface ILoginFormProps {
  onSubmit: (username: string) => void
}

const LoginForm: React.FC<ILoginFormProps> = ({ onSubmit }) => {
  const onFinish = (values: any) => {
    if (values.username.trim()) {
      onSubmit(values.username.trim())
    }
  }

  return (
    <div className="login-form-container">
      <Form
        className="login-form"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h3 className="form-title">Real Time Chat</h3>
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
