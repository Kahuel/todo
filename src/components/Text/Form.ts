export const formText = (language: string) => {
  switch (language) {
    case "ru": {
      return {
        addTask: "Добавить",
      };
    }
    case "eng": {
      return {
        addTask: "Add",
      };
    }
    default: {
      return {
        addTask: "Добавить",
      };
    }
  }
};
