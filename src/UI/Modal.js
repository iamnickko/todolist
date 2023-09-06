import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { Fragment } from "react";
import { motion } from "framer-motion";

const Modal = (props) => {
  return createPortal(
    <Fragment>
      <div className={classes.backdrop}>
        <motion.dialog
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 30}}
          open
          className={classes.modal}
        >
          {props.children}
        </motion.dialog>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
