import Navbar from "../../ui/Navbar/Navbar";

const items = [
  { key: "1", level: "Patients", href: "/patients" },
  { key: "2", level: "My Profile", href: "/patients/my-profile" },
];

const PatientsHeader = () => <Navbar items={items} />;

export default PatientsHeader;
