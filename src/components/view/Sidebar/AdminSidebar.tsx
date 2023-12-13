import Sidebar from "@/components/ui/Sidebar/Sidebar";

const items = [
  { key: "1", level: "Dashboard", href: "/admins/dashboard" },
  { key: "2", level: "My Profile", href: "/admins/my-profile" },
];

const AdminSidebar = ({ children }: { children: React.ReactNode }) => (
  <Sidebar items={items}>{children}</Sidebar>
);

export default AdminSidebar;
