import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Input.css";

const Input = () => {
  const [name, setName] = useState("");

  return (
    <motion.div
      className="app__input"
      whileInView={{
        scale: [0, 1],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        value={name}
        placeholder="Enter the name of a city..."
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={`/location/${name}`} className="app__input-button">
        GO!
      </Link>
    </motion.div>
  );
};

export default Input;
