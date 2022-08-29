import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Input.css";

const Input = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onEnterKeyPressed = (e) => {
    if (name === "") return;
    if (e.key === "Enter") {
      navigate(`/location/${name}`);
    }
  };

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
        onKeyPress={onEnterKeyPressed}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Link to={`/location/${name}`} className="app__input-button">
        GO!
      </Link>
    </motion.div>
  );
};

export default Input;
