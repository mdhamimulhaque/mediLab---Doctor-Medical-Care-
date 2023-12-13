import DoctorsHeader from "@/components/view/Headers/DoctorsHeader";

const DoctorsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DoctorsHeader />
      {children}
    </div>
  );
};

export default DoctorsLayout;
