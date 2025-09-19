import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  const toggleComponent = () => {
    setShow(!show);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering</h1>

      <button 
        onClick={toggleComponent} 
        style={{ padding: "10px", margin: "10px", fontSize: "16px" }}
      >
        {show ? "Hide" : "Show"} Message
      </button>

      {show && <p style={{ fontSize: "20px", color: "green" }}>Hello! I am visible 👋</p>}
    </div>
  );
}

export default App;
