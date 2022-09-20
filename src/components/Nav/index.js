import React from "react";

function Nav(props) {
  const { selectedNav, setSelectedNav } = props;
  return (
    <header>
      <h2>
        <a href="/">Dario</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about">
              <span onClick={() => setSelectedNav("about")}>About Me</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span onClick={() => setSelectedNav("contact")}>Contact</span>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <span onClick={() => setSelectedNav("portfolio")}>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#resume">
              <span onClick={() => setSelectedNav("resume")}>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
