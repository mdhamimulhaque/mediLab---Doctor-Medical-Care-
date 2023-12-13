"use client";
import React, { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: {
    key: string;
    level: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Content>
          <Link href="/">
            <Title className="text-white mb-0" level={3}>
              MediLab
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={item.href}>{item?.level}</Link>
            </Menu.Item>
          ))}
        </Menu>

        <Button type="primary" className="lg:hidden" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          className="lg:hidden"
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
          >
            {items?.map((item) => (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item?.level}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
