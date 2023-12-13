import Navbar from "../../ui/Navbar/Navbar";

const items = [
  { key: "1", level: "Home", href: "/" },
  { key: "2", level: "About", href: "/about" },
  { key: "3", level: "Contact", href: "/contact" },
];

const PublicHeader = () => <Navbar items={items} />;

export default PublicHeader;
