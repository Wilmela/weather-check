import "./Header.css";
import { motion } from "framer-motion";

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
