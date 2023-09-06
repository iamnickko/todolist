import { useReducer } from "react";
import TaskContext from "./task-context";

const defaultTaskState = {
  tasks: [
    {
      id: "t1",
      title: "create to do list",
      deadline: "2023-09-14",
      details: "use react to build a functioning app",
      status: "complete",
    },
    {
      id: "t2",
      title: "Buy groceries",
      deadline: "2023-09-13",
      details: "Particularly chillies and garlic",
      status: "active",
    },
    {
      id: "t3",
      title: "Make a list of tasks",
      deadline: "2023-09-25",
      details: "So it can be immediately completed and archived",
      status: "archive",
    },
    {
      id: "t4",
      title: "Learn Node.js",
      deadline: "2023-09-20",
      details: "Become familiar with backend development",
      status: "active",
    },
    {
      id: "t5",
      title: "Binge watch all the Star Wars",
      deadline: "2023-08-29",
      details: "Including the spin off shows",
      status: "complete",
    },
  ],
};

const taskReducer = (state, action) => {
  if (action.type === "ADD_TASK") {
    const updatedTasks = state.tasks.concat(action.task);
    return {
      tasks: updatedTasks,
    };
  }
  if (action.type === "MARK_COMPLETE") {
    const existingTaskIndex = state.tasks.findIndex(
      (task) => task.id === action.task.id
    );
    const existingTask = state.tasks[existingTaskIndex];
    const updatedTask = {
      ...existingTask,
      status: "complete",
    };
    const updatedTaskList = [...state.tasks];
    updatedTaskList[existingTaskIndex] = updatedTask;
    return {
      tasks: updatedTaskList,
    };
  }
  if (action.type === "MARK_ACTIVE") {
    const existingTaskIndex = state.tasks.findIndex(
      (task) => task.id === action.task.id
    );
    const existingTask = state.tasks[existingTaskIndex];
    const updatedTask = {
      ...existingTask,
      status: "active",
    };
    const updatedTaskList = [...state.tasks];
    updatedTaskList[existingTaskIndex] = updatedTask;
    return {
      tasks: updatedTaskList,
    };
  }
  if (action.type === "MARK_ARCHIVE") {
    const existingTaskIndex = state.tasks.findIndex(task => task.id === action.task.id);
    const existingTask = state.tasks[existingTaskIndex]
    const updatedTask = {
      ...existingTask,
      status: 'archive',
    }
    const updatedTaskList = [...state.tasks]
    updatedTaskList[existingTaskIndex] = updatedTask
    
    return {
      tasks: updatedTaskList,
    };
  }
  return defaultTaskState;
};

const TaskProvider = (props) => {
  const [taskState, dispatchTaskAction] = useReducer(
    taskReducer,
    defaultTaskState
  );

  const addTaskHandler = (task) => {
    dispatchTaskAction({
      type: "ADD_TASK",
      task: task,
    });
  };

  const markCompleteHandler = (task) => {
    dispatchTaskAction({
      type: "MARK_COMPLETE",
      task: task,
    });
  };

  const markActiveHandler = (task) => {
    dispatchTaskAction({
      type: "MARK_ACTIVE",
      task: task,
    });
  };

  const markArchiveHandler = (task) => {
    dispatchTaskAction({
      type: "MARK_ARCHIVE",
      task: task,
    });
  };

  const taskContext = {
    tasks: taskState.tasks,
    addTask: addTaskHandler,
    markComplete: markCompleteHandler,
    markActive: markActiveHandler,
    markArchive: markArchiveHandler,
  };

  return (
    <TaskContext.Provider value={taskContext}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
