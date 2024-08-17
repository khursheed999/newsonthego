// Button.j
import { motion } from "framer-motion";
import { buttonAnimation } from "../../Animation/framerMotion";
const Button = ({ url, text }) => (

  <motion.button
   {...buttonAnimation}
   className="button"
  >
     <a href={url} className="btn btn-primary">
    {text}
  </a>
  </motion.button>
);

export default Button;
