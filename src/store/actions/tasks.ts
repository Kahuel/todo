const addTask = (text: string) => ({
  type: "ADD_TASK",
  payload: {
    text: text,
  },
});

const removeTask = (id: string) => ({
  type: "REMOVE_TASK",
  payload: {
    id: id,
  },
});

const switchTaskState = (id: string) => ({
  type: "SWITCH_TASK_STATE",
  payload: {
    id: id,
  },
});

const updateTaskText = (id: string, text: string) => ({
  type: "UPDATE_TASK",
  payload: {
    id: id,
    text: text,
  },
});

const moveTask = (from: number, to: number) => ({
  type: "REPLACE_TASK",
  payload: {
    from,
    to,
  },
});

const updateTaskDescription = (id: string, description: string) => ({
  type: "UPDATE_TASK_DESCRIPTION",
  payload: {
    id,
    description,
  },
});

export const tasks = {
  addTask,
  removeTask,
  switchTaskState,
  updateTaskText,
  moveTask,
  updateTaskDescription,
};
