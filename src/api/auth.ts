import { instance } from "./api";
import { setCookie } from "utils/cookie";

export const signup = async (username: string, password: string) => {
  try {
    await instance.post("/auth/signup", {
      username,
      password,
    });
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const signin = async (username: string, password: string) => {
  try {
    const response = await instance.post("/auth/signin", {
      username,
      password,
    });
    const token = response.data.accessToken;
    setCookie("token", token);
  } catch (e) {
    alert(e.response.data.message);
  }
};
