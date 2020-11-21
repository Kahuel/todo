import React, { useState } from "react";
import { tasks as tasksActions } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "types/types";
import { formText } from "components/Text";

export const Form: React.FC = (props: any) => {
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskText, setnewTaskText] = useState("");
  const currentLanguage = useSelector((state: State) => state.language);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(tasksActions.addTask(newTaskText, newTaskDescription));
        setNewTaskDescription("");
        setnewTaskText("");
      }}
    >
      <input
        type="text"
        required
        placeholder="text"
        value={newTaskText}
        onChange={(e) => setnewTaskText(e.target.value)}
      />
      <input
        type="text"
        value={newTaskDescription}
        placeholder="description"
        onChange={(e) => setNewTaskDescription(e.target.value)}
      />
      <button>{formText(currentLanguage).addTask}</button>
    </form>
  );
};
