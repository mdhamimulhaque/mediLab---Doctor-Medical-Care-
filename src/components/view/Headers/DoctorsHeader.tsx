import Navbar from "../../ui/Navbar/Navbar";

const items = [
  { key: "1", level: "Doctors", href: "/doctors" },
  { key: "2", level: "My Profile", href: "/doctors/my-profile" },
];

const DoctorsHeader = () => <Navbar items={items} />;

export default DoctorsHeader;
