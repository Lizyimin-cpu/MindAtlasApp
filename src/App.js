import React from "react";
import Enrolments from "./components/Enrolments";
import logo from "./logo.png"; // 根据实际路径导入图片

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
