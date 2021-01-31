import axios from "axios";

export const instance = axios.create({
  baseURL: "https://todo-nest-rest-api.herokuapp.com/",
});

//instance.interceptors.request.use((request) => {
//const token = getCookie("token");
//request.headers.Authorization = `Bearer ${token}`;
//return request;
//});
