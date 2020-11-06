const updateTaskText = (text: string) => ({
  type: "UPDATE_TASK_TEXT",
  payload: {
    text: text,
  },
});

export const text = { updateTaskText };
