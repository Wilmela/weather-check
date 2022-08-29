import "./Header.css";
import { motion } from "framer-motion";

import BG from '../../assets/weather-header.png'

const Header = () => {
  return (
    <div className="app__header">
      <motion.h1 whileInView={{ x: [-100, 0] }} transition={{ duration: 0.5 }}>
        Welcome!
      </motion.h1>
    </div>
  );
};

export default Header;
