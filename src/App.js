import React, { useState } from "react";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import FooterLinks from "./components/FooterLinks";

import "./App.css";


function App() {

  const [selectedNav, setSelectedNav] = useState("about");

  return (
    <div>
      <Nav
        selectedNav={selectedNav}
        setSelectedNav={setSelectedNav}
      ></Nav>
      <main>
        {
        selectedNav === "about" ? (<About></About>) 
        : selectedNav === "contact" ? (<Contact></Contact>)
        : selectedNav === "portfolio" ? (<Portfolio></Portfolio>)
        : selectedNav === "resume" ? (<Resume></Resume>)
        : <About></About>
        }
        
      </main>
      <FooterLinks></FooterLinks>
    </div>
  );
}

export default App;
