const addTask = (title: string, description: string) => ({
  type: "ADD_TASK",
  payload: {
    title,
    description,
  },
});

const addInitialTasks = (initTasks: any) => ({
  type: "ADD_INITIAL_TASKS",
  payload: {
    initTasks,
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

const updateTaskText = (id: string, title: string) => ({
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

const updateTaskDescription = (id: string, description: string) => ({
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
