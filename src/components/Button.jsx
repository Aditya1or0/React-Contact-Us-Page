import { MdOutlineMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = (props) => {
  const { isOutline, icon, text, ...rest } = props; //destructuring
  return (
    <button
      {...rest}
      className={isOutline ? styles.outlineBtn : styles.primaryBtn}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
