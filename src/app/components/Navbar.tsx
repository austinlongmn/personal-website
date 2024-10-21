"use client";
import { Menu } from "antd";

function Navbar() {
  return (
    <nav>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <a href="/">Home</a>
        </Menu.Item>
      </Menu>
    </nav>
  );
}

export default Navbar;
