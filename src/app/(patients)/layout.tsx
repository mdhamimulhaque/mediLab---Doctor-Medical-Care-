import PatientsHeader from "@/components/view/Headers/PatientsHeader";
import PatientSidebar from "@/components/view/Sidebar/PatientSidebar";

const PatientsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PatientsHeader />
      <PatientSidebar>{children}</PatientSidebar>
      {children}
    </div>
  );
};

export default PatientsLayout;
