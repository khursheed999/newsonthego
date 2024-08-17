import { motion } from "framer-motion"
import { varients,dataAnimation } from "../Animation/framerMotion"
export default function Footer() {
  return (
  <motion.footer
  {...varients}
  className="footer">
    <motion.div 
    {...dataAnimation}
    className="footer-contact">
      <motion.a
      {...dataAnimation}
     
       href="mailto:khursheedahmadrah29@gmail.com">Contact me</motion.a>
      <motion.a
      {...dataAnimation} 
      href="https://github.com/khursheed999">Follow Me on GitHub</motion.a>
    </motion.div>
    <motion.div 
     {...dataAnimation}
     viewport={{once:false}}
    className="footer-bottom">
        <p>CopyRight @2024 All rights reserved</p>
        <h5>Developed with by Khursheed Ahmad Rah</h5>
    </motion.div>
  </motion.footer>
  )
}
