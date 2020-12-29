import { instance } from "./api";
import { getCookie } from "utils/cookie";

const getTasks = async () => {
  const token = getCookie("token");
  const initTasks = await instance.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return initTasks;
};

const addTask = async (title: string, description: string) =>
  await instance.post("/tasks", { title, description });

export const tasksApi = { getTasks, addTask };
