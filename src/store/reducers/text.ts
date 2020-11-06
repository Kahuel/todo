export const text = (state = "", action: any) => {
  switch (action.type) {
    case "UPDATE_TASK_TEXT": {
      const { text } = action.payload;
      return text;
    }
    case "ADD_TASK": {
      return "";
    }
    default:
      return state;
  }
};
