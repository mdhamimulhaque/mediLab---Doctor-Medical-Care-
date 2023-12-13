import DoctorsHeader from "@/components/view/Headers/DoctorsHeader";
import DoctorSidebar from "@/components/view/Sidebar/DoctorSidebar";

const DoctorsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DoctorsHeader />
      <DoctorSidebar>{children}</DoctorSidebar>
      {children}
    </div>
  );
};

export default DoctorsLayout;
