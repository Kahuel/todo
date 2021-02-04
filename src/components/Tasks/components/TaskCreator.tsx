import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks as tasksActions } from "store/actions";
import { tasksText } from "components/Text";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "types/types";
import { tasksApi } from "api/tasks";

interface Props {
  task: Task;
  currentLanguage: string;
  refIndex: number;
  disableDrag: boolean;
}

export const TaskCreator: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { task, currentLanguage, refIndex, disableDrag } = props;
  const { id, title, status, description } = task;
  const [textDis, setTextDis] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [taskText, setTaskText] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <Draggable
      draggableId={`${id}`}
      index={refIndex}
      isDragDisabled={disableDrag}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            value={taskText}
            disabled={textDis}
            style={{
              backgroundColor: status === "DONE" ? "#98FB98" : "",
            }}
            onMouseOver={() => setTextDis(false)}
            onMouseLeave={() => {
              if (!clicked) {
                setTextDis(true);
                setTaskText(title);
              }
            }}
            onBlur={() => {
              dispatch(tasksActions.updateTaskText(id, taskText));
              setTextDis(true);
              setClicked(false);
            }}
            onClick={() => setClicked(true)}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <input
            value={taskDescription}
            hidden={isHidden}
            onChange={(e) => setTaskDescription(e.target.value)}
            onBlur={() =>
              dispatch(tasksActions.updateTaskDescription(id, taskDescription))
            }
          />
          <button onClick={() => setIsHidden(!isHidden)}>description</button>
          <select
            onChange={async (e) => {
              const updateTaskResponse = await tasksApi.updateTaskStatus(
                id,
                e.target.value
              );
              dispatch(
                tasksActions.switchTaskState(id, updateTaskResponse.data)
              );
            }}
            defaultValue={status}
          >
            <option value="OPEN">On hold</option>
            <option value="IN_PROGRESS">Active</option>
            <option value="DONE">Finished</option>
          </select>
          <button
            onClick={async () => {
              await tasksApi.deleteTask(id);
              dispatch(tasksActions.removeTask(id));
            }}
          >
            x
          </button>
        </div>
      )}
    </Draggable>
  );
};
