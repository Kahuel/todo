import { Task } from "types/types";

const addTask = (task: Task) => ({
  type: "ADD_TASK",
  payload: {
    task,
  },
});

const addInitialTasks = (initTasks: any) => ({
  type: "ADD_INITIAL_TASKS",
  payload: {
    initTasks,
  },
});

const removeTask = (id: number) => ({
  type: "REMOVE_TASK",
  payload: {
    id: id,
  },
});

const switchTaskState = (id: number, updatedTask: Task) => ({
  type: "SWITCH_TASK_STATE",
  payload: {
    id,
    updatedTask,
  },
});

const updateTaskText = (id: number, title: string) => ({
  type: "UPDATE_TASK",
  payload: {
    id: id,
    title: title,
  },
});

const moveTask = (from: number, to: number) => ({
  type: "REPLACE_TASK",
  payload: {
    from,
    to,
  },
});

const updateTaskDescription = (id: number, description: string) => ({
  type: "UPDATE_TASK_DESCRIPTION",
  payload: {
    id,
    description,
  },
});

export const tasks = {
  addTask,
  addInitialTasks,
  removeTask,
  switchTaskState,
  updateTaskText,
  moveTask,
  updateTaskDescription,
};
