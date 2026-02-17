import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3001/api/logs",
  headers: {
    "Content-Type": "application/json"
  }
});

// Opcional: interceptor para token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});