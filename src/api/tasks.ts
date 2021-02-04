import { instance } from "./api";
import { getCookie } from "utils/cookie";

const getTasks = async () => {
  const token = getCookie("token");
  const initTasks = await instance.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return initTasks.data;
};

const addTask = async (title: string, description: string) => {
  const token = getCookie("token");
  return await instance.post(
    "/tasks",
    {
      title,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const deleteTask = async (id: number) => {
  const token = getCookie("token");
  await instance.delete(`/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateTaskStatus = async (id: number, status: string) => {
  const token = getCookie("token");
  return await instance.patch(
    `/tasks/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const tasksApi = { getTasks, addTask, deleteTask, updateTaskStatus };
