import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Task } from "types/types";
import { tasks as tasksActions } from "store/actions";
import { tasksText } from "components/Text";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DragUpdate,
} from "react-beautiful-dnd";

const TaskCreator = (props: any) => {
  const dispatch = useDispatch();
  const { task, currentLanguage, refIndex } = props;
  const { id, text, state } = task;
  const [dis, setDis] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [taskText, setTaskText] = useState(text);
  return (
    <Draggable draggableId={id} index={refIndex}>
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

export const Tasks = (props: any) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: State) => state.tasks);
  const currentFilter = useSelector((state: State) => state.filter);
  const currentLanguage = useSelector((state: State) => state.language);
  const onDragEnd = useCallback(
    (result: DragUpdate) => {
      if (!result.destination) {
        return;
      }
      dispatch(
        tasksActions.moveTask(result.source.index, result.destination.index)
      );
    },
    [dispatch]
  );
  if (tasks.length === 0) {
    return null;
  }
  const filteredTasks =
    currentFilter === "ALL"
      ? tasks
      : tasks.filter((task: Task) => task.state === currentFilter);
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {filteredTasks.map((task: Task, index) => (
              <TaskCreator
                key={task.id}
                task={task}
                currentLanguage={currentLanguage}
                refIndex={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
