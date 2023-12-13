import PatientsHeader from "@/components/view/Headers/PatientsHeader";

const PatientsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PatientsHeader />
      {children}
    </div>
  );
};

export default PatientsLayout;
