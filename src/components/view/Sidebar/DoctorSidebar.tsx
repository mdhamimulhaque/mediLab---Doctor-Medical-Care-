import Sidebar from "@/components/ui/Sidebar/Sidebar";

const items = [
  { key: "1", level: "Doctors", href: "/doctors" },
  { key: "2", level: "My Profile", href: "/doctors/my-profile" },
];
const DoctorSidebar = ({ children }: { children: React.ReactNode }) => (
  <Sidebar items={items}>{children}</Sidebar>
);

export default DoctorSidebar;
