import axios from "axios";
import UserStorage from "../utils/UserStorage";

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
    const response = await axios.post(`${BASE_URL}/authenticate`, {
      username: loginRequestDTO.email,
      password: loginRequestDTO.password,
    }, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Response:", response);
    
    // Validate response data structure
    if (!response.data || !response.data.token || !response.data.role) {
      throw new Error("Invalid response structure from API");
    }

    const { token, role } = response.data;

    // Save token & user
    UserStorage.saveToken(token);
    UserStorage.saveUser(response.data);

    // Ensure storage is working
    console.log("Stored Token:", UserStorage.getToken());
    console.log("Stored Role:", UserStorage.getUserRole());

    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};
