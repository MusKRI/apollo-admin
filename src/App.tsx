// **** Library Imports ****
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// **** Local Imports ****
import {
  Dashboard,
  Login,
  Home,
  MediaBlogs,
  Careers,
  ContactUs,
} from "./routes";
import RootLayout from "./layout/RootLayout";
import ProtectedRoutes from "./lib/ProtectedRoutes";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Home />} path="/home" />
            <Route element={<MediaBlogs />} path="/media-blogs" />
            <Route element={<Careers />} path="/careers" />
            <Route element={<ContactUs />} path="/contact-us" />
          </Route>
        </Route>
      </Routes>
    </RootLayout>
  );
}

export default App;
