import React from "react";
import { Header, Input } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-items">
        <Header />
        <Input />
      </div>
    </div>
  );
};

export default Home;
