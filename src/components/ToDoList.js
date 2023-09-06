import classes from "./ToDoList.module.css";
import Card from "../UI/Card";
import ToDoListMenu from "./ToDoListMenu";
import ToDoItem from "./ToDoItem";
import { AnimatePresence, motion } from "framer-motion";

const ToDoList = ({ tasks }) => {
  return (
    <Card className={classes.card}>
      <ToDoListMenu />
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -30, opacity: 0 }}
        className={classes.list}
      >
        <AnimatePresence>
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              id={task.id}
              title={task.title}
              deadline={task.deadline}
              details={task.details}
              status={task.status}
            />
          ))}
        </AnimatePresence>
      </motion.ul>
      <AnimatePresence>
        {tasks.length === 0 && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={classes.empty}
          >
            This list is empty!
          </motion.p>
        )}
      </AnimatePresence>
    </Card>
  );
};

export default ToDoList;
