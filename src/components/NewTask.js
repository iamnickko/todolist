import classes from "./NewTask.module.css";
import Modal from "../UI/Modal";
import Button from "./Button";
import { useContext, useRef } from "react";
import TaskContext from "../store/task-context";
import { useNavigate } from "react-router";

const NewTask = (props) => {
  const navigate = useNavigate()
  const taskCtx = useContext(TaskContext);
  const task = useRef();
  const details = useRef();
  const deadline = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    taskCtx.addTask({
      id: Math.random(),
      title: task.current.value,
      details: details.current.value,
      deadline: deadline.current.value,
      status: "active",
    });
    props.onClose()
    navigate('/')
  };

  return (
    <Modal>
      <h2>Create a new task</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="task">Task</label>
        <input ref={task} type="text" id="task" name="task" required />
        <label htmlFor="details">Details</label>
        <textarea
          ref={details}
          rows={8}
          type="text"
          id="details"
          name="details"
          required
        />
        <label htmlFor="deadline">Deadline</label>
        <input ref={deadline} type="date" name="deadline" id="deadline" required />
        <div className={classes.actions}>
          <Button className={classes.btn} onClick={props.onClose}>
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTask;
