import React from "react";
import { Header, Input } from "../../components";
import "./Home.css";

const Home = ({ setIsFocused }) => {
  return (
    <div className="app__home">
      <div className="app__home-items">
        <Header />
        <Input setIsFocused={setIsFocused} />
      </div>
    </div>
  );
};

export default Home;
