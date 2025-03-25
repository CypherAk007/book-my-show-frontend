import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";
import person from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";

const AuthForm = ({ action, handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    setErrorMessage(""); // Reset errors
    handleSubmit(formData, setErrorMessage);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="inputs">
        {action !== "Login" && (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" name="name" placeholder="First Name" value={formData.name} onChange={handleChange} />
          </div>
        )}

        {action === "Sign Up" && (
          <div className="input">
            <img src={person} alt="" />
            <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
          </div>
        )}

        <div className="input">
          <img src={email} alt="" />
          <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
        </div>

        {action !== "Login" && (
          <div className="input">
            <img src={email} alt="" />
            <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
          </div>
        )}

        <div className="input">
          <img src={password} alt="" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div className="submit" onClick={submitForm}>{action}</div>
      </div>
    </div>
  );
};

export default AuthForm;
