export const tasksText = (language: string) => {
  switch (language) {
    case "ru": {
      return {
        activateTask: "Начать",
        completeTask: "Выполнить",
      };
    }
    case "eng": {
      return {
        activateTask: "Activate",
        completeTask: "Complete",
      };
    }
    default: {
      return {
        activateTask: "Начать",
        completeTask: "Выполнить",
      };
    }
  }
};
