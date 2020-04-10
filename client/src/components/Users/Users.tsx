import React from "react"
import { Layout, Menu } from "antd"
import { UserOutlined } from "@ant-design/icons"

import "./Users.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/rootReducer"

const { SubMenu } = Menu
const { Sider } = Layout

interface Props {}

const Users: React.FC = () => {
  const users = useSelector((state: RootState) => state.usersStore.users)
  /* console.log("users: ", users) */

  return (
    <Sider>
      <Menu
        className="layout-menu"
        mode="inline"
        selectable={false}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu
          className="sub-user-menu"
          key="sub1"
          title={
            <span>
              <UserOutlined />
              Пользователи
            </span>
          }
        >
          {users.map((user) => (
            <Menu.Item key={user.id}>{user.username}</Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  )
}

export default Users
