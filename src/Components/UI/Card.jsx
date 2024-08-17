import Button from "./Button";
import newsImg from '../../assets/newsImg.png';
import { motion } from "framer-motion";
import {varients,dataAnimation} from '../../Animation/framerMotion';
export default function Card({ title, url, imgUrl, description }) {

  return (
    <motion.div 
     {...varients}
    className="card d-inline-block m-2  rounded-1 border-1 shadow-lg">
      <motion.img
      {...varients}
      src={imgUrl?imgUrl:newsImg} className="card-img-top " alt="News Image" />
      <motion.div
      {...varients}
      className="card-body">
        <motion.h5
        {...dataAnimation}
        className="title">{title}</motion.h5>
        <motion.p
        {...dataAnimation}
        className="card-text">{description?description:'News Information is not available at the movement please click on more details'}</motion.p>
        <Button url={url} text="More Details" />
      </motion.div>
    </motion.div>
  );
}
