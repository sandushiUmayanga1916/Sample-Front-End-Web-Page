import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Mobile from "./components/Mobile";
import Web from "./components/Web";
import Technology from "./components/Technology";
import Card from "./Card";
import Company from "./components/Company";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="mobile">
          <Mobile />
        </div>

        <div id="web">
          <Web />
        </div>

        <div id="technology">
          <Technology />
        </div>

        <div id="card">
          <Card />
        </div>

        <div id="company">
          <Company />
        </div>

        <div id="subscribe">
          <Subscribe />
        </div>

      </main>
      <Footer/>
    </div>
  );
};

export default App;
