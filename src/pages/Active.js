import { useContext } from "react";
import ToDoList from "../components/ToDoList.js";
import TaskContext from "../store/task-context.js";

const Active = () => {
  const taskCtx = useContext(TaskContext);
  const activeTasks = taskCtx.tasks.filter((task) => task.status === "active");

  return <ToDoList tasks={activeTasks} />;
};

export default Active;
