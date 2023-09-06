import classes from "./Button.module.css";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
