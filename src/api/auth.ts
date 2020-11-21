import { instance } from "./api";

export const signup = (username: string, password: string) =>
  instance.post("/auth/signup", {
    username,
    password,
  });

export const signin = (username: string, password: string) =>
  instance.post("/auth/signin", {
    username,
    password,
  });
