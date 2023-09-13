import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-back-end-rocket-games.onrender.com",
});
