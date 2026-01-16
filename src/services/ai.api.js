import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

export const generateAIResponse = (data) =>
  API.post("/api/ai/generate", data);
