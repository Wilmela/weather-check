import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, About } from "./components";
import Home from "./pages/home/Home";
import LocationDetails from "./pages/locations/LocationDetails";
import PageNotfound from "./pages/notFound/PageNotfound";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:name" element={<LocationDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
