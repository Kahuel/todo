export const tasksText = (language: string) => {
  switch (language) {
    case "ru": {
      return {
        finishTask: "Завершить",
        reopenTask: "Переоткрыть",
      };
    }
    case "eng": {
      return {
        finishTask: "Finish",
        reopenTask: "Reopen",
      };
    }
    default: {
      return {
        finishTask: "Завершить",
        reopenTask: "Переоткрыть",
      };
    }
  }
};
