import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="programming" />
        </main>
        <br />
        <footer className="text-center">
          <a
            className="App-link"
            href="https://github.com/patcard21/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
