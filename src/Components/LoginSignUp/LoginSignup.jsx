import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import person from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png";
import { loginClient, registerClient, registerCompany } from "../../Services/AuthService";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Hook for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (selectedAction) => {
    // Reset error message
    setErrorMessage("");

    // Validation before sending request
    if (
      (selectedAction !== "Login" && !formData.name) ||
      !formData.email ||
      !formData.password ||
      (selectedAction === "Sign Up" && !formData.lastname) ||
      (selectedAction !== "Login" && !formData.phone)
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      let response;
      if (selectedAction === "Sign Up") {
        response = await registerClient(formData);
        alert(response.data.message);
        navigate("/login"); // Redirect to login after successful signup
      } else if (selectedAction === "Sign Up as Company") {
        response = await registerCompany(formData);
        alert(response.data.message);
        navigate("/login"); // Redirect to login after successful signup
      } else {
        response = await loginClient(formData);
        alert(response.data.message);
        navigate("/home"); // Redirect to home after successful login
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong! Please try again.");
    }
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
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {action === "Sign Up" && (
          <div className="input">
            <img src={person} alt="" />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="input">
          <img src={email} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {action !== "Login" && (
          <div className="input">
            <img src={email} alt="" />
            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="input">
          <img src={password} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      {action !== "Sign Up" && (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container-outer">
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              handleSubmit("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" || action === "Sign Up as Company" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
              handleSubmit("Login");
            }}
          >
            Login
          </div>
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit darkblue"}
          onClick={() => {
            setAction("Sign Up as Company");
            handleSubmit("Sign Up as Company");
          }}
        >
          Sign Up as Company
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
