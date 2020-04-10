import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Layout, Menu } from "antd"

import "./MainLayout.scss"
import ChatInput from "../../components/ChatInput/ChatInput"
import MessagesList from "../../components/Messages/MessagesList"
import Users from "../../components/Users/Users"
import { RootState } from "../../redux/rootReducer"
import { messageSending } from "../../redux/ducks/messages/messages-reducer"

const { Header, Content } = Layout

interface IMainLayout {}

const MainLayout: React.FC<IMainLayout> = () => {
  const dispatch = useDispatch()

  const messages = useSelector(
    (state: RootState) => state.messagesStore.mainChatMessages
  )
  const userSocketId = useSelector(
    (state: RootState) => state.authStore.socketId
  )

  const sendMessage = (text: string) => {
    dispatch(messageSending(text))
  }

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
          <Users />
          <Content className="main-layout-content-container">
            <div className="main-layout-messages">
              <MessagesList messages={messages} userSocketId={userSocketId} />
            </div>

            <div className="main-layout-input">
              <ChatInput onSubmit={sendMessage} />
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default MainLayout
