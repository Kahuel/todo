import { instance } from "./api";

const getTasks = async () => await instance.get("/tasks");

export const tasksApi = { getTasks };
