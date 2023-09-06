import { Fragment, useState } from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import NewTask from "./NewTask";
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [isCreatingNewTask, setIsCreatingNewTask] = useState(false);

  const createNewTaskHandler = () => {
    setIsCreatingNewTask(true);
  };

  const onClose = () => {
    setIsCreatingNewTask(false);
  };

  return (
    <Fragment>
      <AnimatePresence>
        {isCreatingNewTask && <NewTask onClose={onClose} />}
      </AnimatePresence>
      <header className={classes.header}>
        <div className={classes.title}>
          <h1>ToDoList</h1>
        </div>
        <div className={classes.create}>
          <Button onClick={createNewTaskHandler}>Create New Task</Button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
