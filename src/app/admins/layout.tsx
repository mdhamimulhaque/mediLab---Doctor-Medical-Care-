import AdminsHeader from "@/components/view/Headers/AdminsHeader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminsHeader />
      {children}
    </div>
  );
};

export default AdminLayout;
