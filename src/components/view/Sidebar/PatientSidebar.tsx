import Sidebar from "@/components/ui/Sidebar/Sidebar";

const items = [
  { key: "1", level: "Appointments", href: "/patients/my-appointment" },
  { key: "2", level: "My Profile", href: "/patients/my-profile" },
];

const PatientSidebar = ({ children }: { children: React.ReactNode }) => (
  <Sidebar items={items}>{children}</Sidebar>
);

export default PatientSidebar;
