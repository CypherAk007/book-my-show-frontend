import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { registerClient } from "../../Services/AuthService";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData, setErrorMessage) => {
    // if (!formData.name || !formData.lastname || !formData.email || !formData.password || !formData.phone) {
    //   setErrorMessage("Please fill in all required fields.");
    //   return;
    // }

    try {
      const response = await registerClient(formData);
      alert(response.data.message);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return <AuthForm action="Sign Up" handleSubmit={handleSubmit} />;
};

export default SignUp;
