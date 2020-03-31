import React, { useEffect } from "react"
import { Layout, Menu, Input } from "antd"
import { UserOutlined } from "@ant-design/icons"
import io from "socket.io-client"

import "./MainLayout.scss"
import Messages from "../../components/Messages/Messages"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

interface Props {}

const MainLayout: React.FC = (props: Props) => {
  const server = "http://localhost:5000"
  const socket = io(server)
  useEffect(() => {
    socket.on("message", (message: string) => {
      console.log("mes from serv: ", message)
    })
  }, [])

  const onSubmit = (e: any) => {
    const mes = e.target.value
    console.log(mes)
    socket.emit("newMessage", mes)
    e.target.value = ""
  }

  return (
    <Layout className="main-layout">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
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
            <div className="main-layout-messages">
              <Messages />
            </div>

            <div className="main-layout-input">
              <Input
                placeholder="Введите ваше сообщение..."
                onPressEnter={onSubmit}
              />
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default MainLayout
