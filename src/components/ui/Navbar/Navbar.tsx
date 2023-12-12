"use client";
import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

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
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Content>
          <Title className="text-white mb-0" level={3}>
            MediLab
          </Title>
        </Content>
        <Menu
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
      </Header>
    </Layout>
  );
};

export default Navbar;
