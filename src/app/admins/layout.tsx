import AdminsHeader from "@/components/view/Headers/AdminsHeader";
import AdminSidebar from "@/components/view/Sidebar/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminsHeader />
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
};

export default AdminLayout;
