import React  from "react";
import { Link } from "react-router-dom";
import s from "./SideBar.module.css";
import {
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const SideBar = () => {
console.log();

  const menuArr = [
    {
      key: "1",
      icon: <ShoppingOutlined />,
      label: "Products",
      link: "/",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Users",
      link: "/users",
    },
    {
      key: "3",
      icon: <ShoppingCartOutlined />,
      label: "Busket",
      link: "/busket",
    },
  ];
  return (
    <div className={s.sideBar}>
      <Layout>
        <Sider >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {" "}
            {menuArr.map((item) => {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.link}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
};

export default SideBar;
