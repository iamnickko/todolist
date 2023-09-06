import { createContext } from "react";

const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
  markComplete: () => {},
  markActive: () => {},
  markArchive: () => {},
});

export default TaskContext;
