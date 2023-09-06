import { NavLink } from "react-router-dom";
import classes from "./ToDoListMenu.module.css";
import { useContext } from "react";
import TaskContext from "../store/task-context";

const ToDoListMenu = () => {
  const taskCtx = useContext(TaskContext);
  const numOfActive = taskCtx.tasks.reduce((prev, cur) => {
    if (cur.status === "active") {
      prev++;
    }
    return prev;
  }, 0);
  const numOfComplete = taskCtx.tasks.reduce((prev, cur) => {
    if (cur.status === "complete") {
      prev++;
    }
    return prev;
  }, 0);
  const numOfArchive = taskCtx.tasks.reduce((prev, cur) => {
    if (cur.status === "archive") {
      prev++;
    }
    return prev;
  }, 0);

  return (
    <menu className={classes.menu}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        Active <span className={classes.badge}>{numOfActive}</span>
      </NavLink>
      <NavLink
        to="/complete"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        Complete <span className={classes.badge}>{numOfComplete}</span>
      </NavLink>
      <NavLink
        to="/archive"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        Archive <span className={classes.badge}>{numOfArchive}</span>
      </NavLink>
    </menu>
  );
};

export default ToDoListMenu;
