import { useState } from "react";
import { Link } from "react-router-dom";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

import { navLinks } from "../../utils/constants";

import './Navbar.css';

import LOGO from "../../assets/icon.png";

const Links = ({ title, className, handleClick , page}) => {
  return (
    <Link
      to={page}
      onClick={handleClick}
      style={{
        textDecoration: "none",
        textTransform: "uppercase",
        fontWeight: 900,
      }}
    >
      <li className={className}>
        <p className="title">{title}</p>
      </li>
    </Link>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <Link to='/' className="app__navbar-logo">
        <img src={LOGO} alt="logo" />
        <h3>F-Caster</h3>
      </Link>

      <ul className="app__navbar-links">
        {navLinks.map((item, i) => (
          <div className="app__navbar-link" key={item.title}>
            <Links
              title={item.title}
              page={item.page}
              className="app__navbar-link-item"
            />
          </div>
        ))}
      </ul>

      <div className="app__navbar-mobile">
        {toggle ? (
          <HiX onClick={() => setToggle(false)} />
        ) : (
          <HiMenu onClick={() => setToggle(true)} />
        )}

        {/* mobile */}
        <div>
          {toggle && (
            <motion.div
              whileInView={{ y: [-100, 0] }}
              transition={{ duration: 0.5, ease:'easeInOut' }}
              className="app__navbar-mobile-links"
            >
              <ul>
                <div className="app__navbar-mobile-link">
                  {navLinks.map((item) => (
                    <div key={item.page}>
                      <Links
                        title={item.title}
                        page={item.page}
                        handleClick={() => setToggle(false)}
                      />
                    </div>
                  ))}
                </div>
                <img src={LOGO} alt="logo" width="100px" height="100px" />
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
