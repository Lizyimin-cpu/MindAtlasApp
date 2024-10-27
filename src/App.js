import React from "react";
import Enrolments from "./components/Enrolments";
import logo from "./logo.png"; // Import images based on the actual path

function App() {
  return (
    <div className="App">
      <nav style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <img src={logo} alt="MindAtlas Logo" style={{ height: "50px" }} />
      </nav>
      <Enrolments />
    </div>
  );
}

export default App;
