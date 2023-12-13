import Navbar from "../../ui/Navbar/Navbar";

const items = [
  { key: "1", level: "Admins", href: "/admins" },
  { key: "2", level: "My Profile", href: "/admins/my-profile" },
];

const AdminsHeader = () => <Navbar items={items} />;

export default AdminsHeader;
