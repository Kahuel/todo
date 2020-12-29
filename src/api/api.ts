import axios from "axios";
import { getCookie } from "utils/cookie";

export const instance = axios.create({
  baseURL: "https://todo-nest-rest-api.herokuapp.com/",
});

instance.interceptors.request.use((request) => {
  const token = getCookie("token");
  request.headers.Authorization = token;
  return request;
});
