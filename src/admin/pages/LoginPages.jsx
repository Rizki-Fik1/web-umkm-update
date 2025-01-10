import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Lock, Mail, Loader2 } from "lucide-react";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [isLocked, setIsLocked] = useState(false);
    const [countdown, setCountdown] = useState(0); // Countdown in seconds

    const maxAttempts = 5; // Maximum login attempts
    const lockDuration = 300; // Lock duration in seconds (5 minutes)

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    useEffect(() => {
        if (isLocked && countdown > 0) {
            const interval = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (countdown === 0) {
            setIsLocked(false);
            setAttempts(0); // Reset attempts after lock period
        }
    }, [isLocked, countdown]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (isLocked) return;

        setIsLoading(true);
        setError(false);

        // Add delay of 2 seconds before attempting login
        setTimeout(() => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch({ type: "LOGIN", payload: user });
                    navigate("/dashboard");
                })
                .catch(() => {
                    setError(true);
                    setAttempts((prev) => prev + 1); // Increment login attempts

                    if (attempts + 1 >= maxAttempts) {
                        setIsLocked(true);
                        setCountdown(lockDuration); // Set countdown to 5 minutes
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 2000); // Delay of 2 seconds
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <Lock className="w-8 h-8 text-orange-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Admin Login
                    </h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || isLocked}
                        className={`w-full py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                            isLocked
                                ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                : "bg-orange-500 hover:bg-orange-600 text-white"
                        }`}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>Memproses...</span>
                            </>
                        ) : (
                            <span>Login</span>
                        )}
                    </button>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center animate-shake">
                            Email atau password salah
                        </div>
                    )}

                    {isLocked ? (
                        <div className="text-center text-sm text-gray-600 mt-3">
                            Akun terkunci. Silakan coba lagi dalam{" "}
                            <span className="font-bold">{formatTime(countdown)}</span>.
                        </div>
                    ) : (
                        <div className="text-center text-sm text-gray-600 mt-3">
                            Sisa kesempatan login:{" "}
                            <span className="font-bold">{maxAttempts - attempts}</span>.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
