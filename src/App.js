import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
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
