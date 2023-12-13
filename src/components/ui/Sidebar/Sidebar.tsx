"use client";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Content } = Layout;

const Sidebar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    key: string;
    level: string;
    href: string;
  }[];
}) => {
  const pathName = usePathname();
  return (
    <Layout className="flex-row">
      <Sider width={200} className="bg-gray-200 min-h-screen flex-row">
        <Menu
          className="bg-transparent px-2 py-4"
          disabledOverflow
          theme="light"
          mode="inline"
          selectedKeys={[items.find((item) => item.href === pathName)?.key!]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.key}>
              <Link href={item.href}>{item?.level}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Content className="p-4">{children}</Content>
    </Layout>
  );
};

export default Sidebar;
