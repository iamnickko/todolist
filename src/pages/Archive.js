import { useContext } from "react";
import ToDoList from "../components/ToDoList";
import TaskContext from "../store/task-context";

const Archive = () => {
  const taskCtx = useContext(TaskContext);
  const archivedTasks = taskCtx.tasks.filter(
    (task) => task.status === "archive"
  );

  return <ToDoList tasks={archivedTasks} />;
};

export default Archive;
