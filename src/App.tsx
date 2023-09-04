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
  AddCareer,
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
            <Route element={<ContactUs />} path="/contact-us" />

            {/* Careers Routes */}
            <Route element={<Careers />} path="/careers" />
            <Route element={<AddCareer />} path="/careers/add-career" />
          </Route>
        </Route>
      </Routes>
    </RootLayout>
  );
}

export default App;
