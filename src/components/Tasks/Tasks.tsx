import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State, Task } from "types/types";
import { tasks as tasksActions } from "store/actions";
import { TaskCreator } from "./components/TaskCreator";
import { DragDropContext, Droppable, DragUpdate } from "react-beautiful-dnd";

export const Tasks: React.FC = () => {
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
                disableDrag={currentFilter === "ALL" ? false : true}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
