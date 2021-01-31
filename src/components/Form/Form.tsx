import React, { useState, useEffect } from "react";
import { setCookie, getCookie } from "utils/cookie";
import { tasks as tasksActions } from "store/actions";
import { useDispatch, useSelector } from "react-redux";
import { State } from "types/types";
import { formText } from "components/Text";
import { Link, Redirect } from "react-router-dom";
import { tasksApi } from "api/tasks";

export const Form: React.FC = (props: any) => {
  const [newTaskDescription, setNewTaskDescription] = useState(" ");
  const [newTaskText, setnewTaskText] = useState("");
  const currentLanguage = useSelector((state: State) => state.language);
  const token = getCookie("token");
  const dispatch = useDispatch();

  useEffect(() => {
    const popa = async () => {
      const initTasks = await tasksApi.getTasks();
      dispatch(tasksActions.addInitialTasks(initTasks));
    };
    popa();
  }, []);

  if (token === "") {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Link to="/">
        <button
          onClick={() => {
            setCookie("token", "");
          }}
        >
          Log out
        </button>
      </Link>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          dispatch(tasksActions.addTask(newTaskText, newTaskDescription));
          const newTask = await tasksApi.addTask(
            newTaskText,
            newTaskDescription
          );
          console.log(newTask.data);
          setNewTaskDescription("");
          setnewTaskText("");
        }}
      >
        <input
          type="text"
          required
          placeholder="title"
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
    </div>
  );
};
