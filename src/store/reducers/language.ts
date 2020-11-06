import { Action } from "types/types";

export const language = (state = "ru", action: Action) => {
  switch (action.type) {
    case "SWITCH_LANGUAGE": {
      const language = action.payload.language;
      return language;
    }
    default: {
      return state;
    }
  }
};
