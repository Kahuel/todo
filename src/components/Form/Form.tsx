import React from "react";
import { tasks as tasksActions, text as textActions } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "types/types";
import { formText } from "components/Text";

export const Form: React.FC = (props: any) => {
  const text = useSelector((state: State) => state.text);
  const currentLanguage = useSelector((state: State) => state.language);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(tasksActions.addTask(text));
      }}
    >
      <input
        type="text"
        required
        value={text}
        onChange={(e) => dispatch(textActions.updateTaskText(e.target.value))}
      />
      <button>{formText(currentLanguage).addTask}</button>
    </form>
  );
};
