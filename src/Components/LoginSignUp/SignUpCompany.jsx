import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { registerCompany } from "../../Services/AuthService";

const SignUpCompany = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData, setErrorMessage) => {
    // if (!formData.name  || !formData.email || !formData.password || !formData.phone) {
    //   setErrorMessage("Please fill in all required fields.");
    //   return;
    // }

    try {
      const response = await registerCompany(formData);
      alert(response.data.message);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return <AuthForm action="Sign Up as Company" handleSubmit={handleSubmit} />;
};

export default SignUpCompany;
