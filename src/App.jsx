import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePages from "./public/pages/HomePages";
import MenuPages from "./public/pages/MenuPages";
import RatePages from "./public/pages/RatePages";
import AboutPage from "./public/pages/AboutPages";
import Login from "./admin/pages/LoginPages";
import Dashboard from "./admin/pages/DashboardPages";
import { AuthContext } from "./admin/context/AuthContext";
import PropTypes from "prop-types";
import LogoutPage from "./admin/pages/Logout";
import AdminMenu from "./admin/pages/AdminMenu";

export default function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  RequireAuth.propTypes = {
    children: PropTypes.node.isRequired
  };

  console.log(currentUser);

  return(
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePages/>} />
          <Route path="/menu" element={<MenuPages/>} />
          <Route path="/rate" element={<RatePages/>} />
          <Route path="/about" element={<AboutPage/>} />

          {/* Admin Routes */}
          <Route path="/login" element={<Login/>} />
          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/admin-menu" element={<RequireAuth><AdminMenu /></RequireAuth>} />
          <Route path="/logout" element={<LogoutPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

