import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LogoutPage = () => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleConfirmLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
        navigate("/login");
    };

    const handleCancelLogout = () => {
        navigate("/dashboard");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    Apakah Anda yakin ingin logout?
                </h2>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={handleConfirmLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Ya
                    </button>
                    <button
                        onClick={handleCancelLogout}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                    >
                        Tidak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
