import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="h-screen bg-[#FFFBD3]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex bg-gray-100">
        <div className="text-start ml-4 mt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Selamat Datang, Admin!</h1>
          <p className="text-lg text-gray-600">Ini adalah halaman Dashboard Anda.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
