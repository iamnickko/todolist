import ToDoList from "../components/ToDoList";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const Complete = () => {
    const taskCtx = useContext(TaskContext);
    const completeTasks = taskCtx.tasks.filter((task) => task.status === "complete");
  
    return <ToDoList tasks={completeTasks} />;
};

export default Complete;