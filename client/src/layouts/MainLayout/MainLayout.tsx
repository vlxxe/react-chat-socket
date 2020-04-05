import React, { ReactElement } from "react"
import { Layout, Menu, Input } from "antd"
import { UserOutlined } from "@ant-design/icons"

import "./MainLayout.scss"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

interface IMainLayout {
  messages: ReactElement
  input: ReactElement
}

const MainLayout: React.FC<IMainLayout> = ({ messages, input }) => {
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
          <Sider>
            <Menu
              className="layout-menu"
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
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
