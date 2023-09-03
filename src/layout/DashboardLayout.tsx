// **** Library Imports ****
import { Outlet } from "react-router-dom";

// **** Local Imports ****
import Sidebar from "@/components/sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
