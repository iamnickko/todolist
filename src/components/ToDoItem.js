import TaskContext from "../store/task-context";
import classes from "./ToDoItem.module.css";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemActions from "./ItemActions";

const ToDoItem = ({ title, deadline, details, status, id }) => {
  const taskCtx = useContext(TaskContext);
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  const onCompleteHandler = () => {
    taskCtx.markComplete({
      id,
      title,
      deadline,
      details,
      status,
    });
  };

  const onActiveHandler = () => {
    taskCtx.markActive({
      id,
      title,
      deadline,
      details,
      status,
    });
  };

  const onArchiveHandler = () => {
    taskCtx.markArchive({
      id,
      title,
      deadline,
      details,
      status,
    });
  };

  let itemActions;

  if (status === "active") {
    itemActions = (
      <>
        <ItemActions
          text="Archive"
          onClick={onArchiveHandler}
          className={classes.archive}
        />
        <ItemActions text="Mark as completed" onClick={onCompleteHandler} />
      </>
    );
  }
  if (status === "complete") {
    itemActions = (
      <>
        <ItemActions
          text="Archive"
          onClick={onArchiveHandler}
          className={classes.archive}
        />
        <ItemActions text="Mark as Active" onClick={onActiveHandler} />
      </>
    );
  }
  if (status === "archive") {
    itemActions = (
      <ItemActions text="Mark as Active" onClick={onActiveHandler} />
    );
  }

  return (
    <motion.article
      layout
      exit={{ opacity: 0, y: -20 }}
      className={classes["todo-item"]}
    >
      <div className={classes.summary}>
        {/* <img src="" alt="" /> */}
        <div className={classes.text}>
          <h2>{title}</h2>
          <h4 className={classes.deadline}>Complete by {deadline}</h4>
        </div>

        <div className={classes.actions}>{itemActions}</div>
      </div>

      <h5 className={classes["show-details"]} onClick={showDetailsHandler}>
        View Details{" "}
        <motion.span
          animate={{ rotate: showDetails ? -180 : 0 }}
          className="material-symbols-outlined"
        >
          expand_more
        </motion.span>
      </h5>
      <AnimatePresence>
        {showDetails && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
      <hr className={classes.line} />
    </motion.article>
  );
};

export default ToDoItem;
