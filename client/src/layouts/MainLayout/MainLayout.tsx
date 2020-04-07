import React, { ReactElement } from "react"
import { Layout, Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"

import "./MainLayout.scss"

const { Header, Content } = Layout

interface IMainLayout {
  users: ReactElement
  messages: ReactElement
  input: ReactElement
}

const MainLayout: React.FC<IMainLayout> = ({ users, messages, input }) => {
  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
      </Header>
      <Content className="main-layout-container">
        <Layout className="site-layout-background">
          {users}
          <Content className="main-layout-content-container">
            <div className="main-layout-messages">{messages}</div>

            <div className="main-layout-input">{input}</div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default MainLayout
