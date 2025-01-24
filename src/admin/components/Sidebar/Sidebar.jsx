import React, { useState } from 'react';
import { Dashboard, Fastfood, RateReview, Logout } from "@mui/icons-material";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../public/assets/LogoBaru.png';

const AdminNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const mainMenuItems = [
    { path: '/dashboard', icon: Dashboard, text: 'Dashboard', color: '#ED6A18' },
    { path: '/admin-menu', icon: Fastfood, text: 'Menu', color: '#ED6A18' },
    { path: '/admin-rate', icon: RateReview, text: 'Rate', color: '#ED6A18' },
  ];

  const logoutItem = { path: '/logout', icon: Logout, text: 'Logout', color: '#ED6A18' };

  const renderMenuItem = (item, isActive) => {
    const Icon = item.icon;
    return (
      <Link to={item.path} key={item.path}>
        <div className="relative flex justify-center px-4">
          <div className="relative w-[190px] h-12 group">
            {/* Active/Hover Background */}
            <div
              className={`absolute inset-0 rounded-[10px] transition-colors duration-200
                ${isActive ? 'bg-[#ed6a18]' : 'group-hover:bg-[#ed6a18]'}`}
            />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center px-4">
              <div className={`w-8 h-8 flex items-center justify-centerl
                ${isActive ? 'text-white' : 'text-[#ed6a18] group-hover:text-white'}`}>
                <Icon sx={{ fontSize: 24 }} />
              </div>
              <span className={`ml-4 text-lg font-medium
                ${isActive ? 'text-white' : 'text-[#ed6a18] group-hover:text-white'}`}>
                {item.text}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed z-50 top-4 left-4 p-2 rounded-md bg-[#ed6a18] text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed lg:static transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 h-screen bg-[#f5ffbb] border-r border-gray-200 flex flex-col`}
      >
        {/* Logo Container */}
        <div className="h-32 flex items-center mt-2 mr-8">
          <div className="w-full flex justify-start ml-4">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        {/* Main Navigation Menu */}
        <div className="mt-4 flex-grow">
          {mainMenuItems.map((item) => (
            renderMenuItem(item, location.pathname === item.path)
          ))}
        </div>

        {/* Divider */}
        <div className="mx-8 border-t border-gray-600"></div>

        {/* Logout Button */}
        <div className="mb-8 mt-4">
          {renderMenuItem(logoutItem, location.pathname === '/logout')}
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation;