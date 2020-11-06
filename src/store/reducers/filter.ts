import { Action } from "types/types";

export const filter = (state = "ALL", action: Action) => {
  switch (action.type) {
    case "SWITCH_FILTERING": {
      return action.payload.status;
    }
    default: {
      return state;
    }
  }
};
