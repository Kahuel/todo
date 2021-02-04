import { Action, Task, Gayload } from "types/types";

export const tasks = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_INITIAL_TASKS": {
      const { initTasks } = action.payload;
      return initTasks;
    }
    case "ADD_TASK": {
      const { task } = action.payload;
      return [...state, task];
    }
    case "REMOVE_TASK": {
      const { id } = action.payload;
      return state.filter((task: Task) => task.id !== id);
    }
    case "UPDATE_TASK": {
      const { id, title } = action.payload;
      return state.map((task: Task) =>
        task.id === id ? { ...task, title: title } : task
      );
    }
    case "UPDATE_TASK_DESCRIPTION": {
      const { id, description } = action.payload;
      return state.map((task: Task) =>
        task.id === id ? { ...task, description: description } : task
      );
    }
    case "REPLACE_TASK": {
      const { from, to } = action.payload as Gayload;
      const stateToMutate = [...state];
      const [deleted] = stateToMutate.splice(from, 1);
      stateToMutate.splice(to, 0, deleted);

      return stateToMutate;
    }
    case "SWITCH_TASK_STATE": {
      const { id, updatedTask } = action.payload;
      return state.map((task: Task) => {
        if (task.id === id) {
          return updatedTask;
        }
        return task;
      });
    }
    default:
      return state;
  }
};
