import _ from "lodash";
import { Action, Task, Gayload } from "types/types";

export const tasks = (state = [], action: Action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const { text } = action.payload;
      const newTask = {
        id: _.uniqueId(),
        text: text,
        state: "active",
      };
      return [...state, newTask];
    }
    case "REMOVE_TASK": {
      const { id } = action.payload;
      return state.filter((task: Task) => task.id !== id);
    }
    case "UPDATE_TASK": {
      const { id, text } = action.payload;
      return state.map((task: Task) =>
        task.id === id ? { ...task, text: text } : task
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
      const { id } = action.payload;
      return state.map((task: Task) => {
        if (task.id === id) {
          return {
            ...task,
            state: task.state === "active" ? "finished" : "active",
          };
        }
        return task;
      });
    }
    default:
      return state;
  }
};
