import axios from "axios";

const BASE_URL = "http://localhost:8080/auth"; //Backend API base Url
const AUTH_HEADER = "authorization"; // Case-sensitive
export const registerClient = async(sigupRequestDTO)=>{
    return axios.post(`${BASE_URL}/client/sign-up`,sigupRequestDTO);
};
export const registerCompany = async(sigupRequestDTO)=>{
    return axios.post(`${BASE_URL}/company/sign-up`,sigupRequestDTO);
};

export const loginClient = async (loginRequestDTO) => {
  try {
    // const response = await axios.post(`${BASE_URL}/authenticate`, {
    //   username: loginRequestDTO.email, // Ensure correct key
    //   password: loginRequestDTO.passwod,
    // });
    const response = await axios.post(`${BASE_URL}/authenticate`, {
      username: loginRequestDTO.email, // Ensure correct key
      password: loginRequestDTO.password,
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response:", response);

    const token = response.data.token; // Read token from response body
    localStorage.setItem("token", token); // Store token for future use
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};