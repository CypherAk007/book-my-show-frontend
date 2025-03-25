import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { loginClient } from "../../Services/AuthService";
import UserStorage from "../../utils/UserStorage";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData, setErrorMessage) => {
    try {
      const response = await loginClient(formData);
      console.log("🔹 Login Response:", response);

      // Ensure UserStorage is updated before navigating
      setTimeout(() => {
        const token = UserStorage.getToken();
        const role = UserStorage.getUserRole();

        console.log("✅ Updated Token:", token);
        console.log("✅ Updated Role:", role);
        
        if (UserStorage.isClientLoggedIn()) {
          console.log("🔄 Navigating to Client Dashboard...");
          navigate("/client-dashboard");
        } else if (UserStorage.isCompanyLoggedIn()) {
          console.log("🔄 Navigating to Company Dashboard...");
          navigate("/company-dashboard");
        } else {
          console.log("🔄 Navigating to Home...");
          navigate("/home"); // Default route
        }
      }, 100); // Small delay to ensure storage update
    } catch (error) {
      console.error("❌ Login Error:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return <AuthForm action="Login" handleSubmit={handleSubmit} />;
};

export default Login;
