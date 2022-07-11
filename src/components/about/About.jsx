import { FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./About.css";

import LOGO from "../../assets/icon.png";

const About = () => {
  return (
    <div className="app__about app__flex-col">
      <motion.img
        src={LOGO}
        alt="logo"
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="app__about-developer app__flex-col"
        whileInView={{ x: [-100, 0] }}
        transition={{ duration: 0.5 }}
      >
        <h3>Chukumela Wilson</h3>
        <h6>Developer</h6>
      </motion.div>
      <p>
        This app was developed for educational purposes. It is absolutely free.
      </p>
      <h4>Library, Dependencies and API used include:</h4>
      <motion.ol
        type="1"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <li>React</li>
        <li>React icons</li>
        <li>React-router-dom</li>
        <li>css</li>
        <li>React-chartjs-2 and Chart.js</li>
        <li>framer-motion</li>
        <li>
          Open weather map api from
          <a
            href="https://rapidapi.com/hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            rapidapi
          </a>
        </li>
      </motion.ol>
      <motion.div
        className="app__about-socials app__flex"
        whileInView={{ y: [-10, 0] }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://github.com/Wilmela"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://twitter.com/tunizzle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={28} />
        </a>
      </motion.div>
    </div>
  );
};

export default About;
