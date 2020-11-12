import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tasks as tasksActions } from "store/actions";
import { tasksText } from "components/Text";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "types/types";

interface Props {
  task: Task;
  currentLanguage: string;
  refIndex: number;
  disableDrag: boolean;
}

export const TaskCreator: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { task, currentLanguage, refIndex, disableDrag } = props;
  const { id, text, state, description } = task;
  const [dis, setDis] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [taskText, setTaskText] = useState(text);
  const [taskDescription, setTaskDescription] = useState(text);
  const [isHidden, setIsHidden] = useState(description.length === 0);

  return (
    <Draggable draggableId={id} index={refIndex} isDragDisabled={disableDrag}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            value={taskText}
            disabled={dis}
            style={{
              backgroundColor: state === "DONE" ? "#98FB98" : "",
            }}
            onMouseOver={() => setDis(false)}
            onMouseLeave={() => {
              if (!clicked) {
                setDis(true);
                setTaskText(text);
              }
            }}
            onBlur={() => {
              dispatch(tasksActions.updateTaskText(id, taskText));
              setDis(true);
              setClicked(false);
            }}
            onClick={() => setClicked(true)}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <input
            hidden={isHidden}
            onChange={(e) => setTaskDescription(e.target.value)}
            onBlur={() =>
              dispatch(tasksActions.updateTaskDescription(id, taskDescription))
            }
          />
          <button onClick={() => setIsHidden(!isHidden)}>description</button>
          <button onClick={() => dispatch(tasksActions.switchTaskState(id))}>
            {state === "OPEN"
              ? tasksText(currentLanguage).activateTask
              : tasksText(currentLanguage).completeTask}
          </button>
          <button onClick={() => dispatch(tasksActions.removeTask(id))}>
            x
          </button>
        </div>
      )}
    </Draggable>
  );
};
