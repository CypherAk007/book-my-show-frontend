import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { loginClient } from "../../Services/AuthService";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData, setErrorMessage) => {
    // if (!formData.email || !formData.password) {
    //   setErrorMessage("Please fill in all required fields.");
    //   return;
    // }

    try {
      const response = await loginClient(formData);
      alert(response.data.message);
      navigate("/home"); // Redirect after successful login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return <AuthForm action="Login" handleSubmit={handleSubmit} />;
};

export default Login;
