import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/herosection/Hero";
import Main from "./components/mainsection/Main";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
        <Main />
      </header>
    </>
  );
}

export default App;
