export const statusBar = (language: string) => {
  switch (language) {
    case "ru": {
      return {
        filterTitle: "Отображать",
        all: "все",
        opened: "открытые",
        inProgress: "в процессе",
        done: "выполненные",
      };
    }
    case "eng": {
      return {
        filterTitle: "Show",
        all: "all",
        opened: "opened",
        inProgress: "in progress",
        done: "done",
      };
    }
    default: {
      return {
        filterTitle: "Отображать",
        all: "все",
        opened: "открытые",
        inProgress: "в процессе",
        done: "выполненные",
      };
    }
  }
};
