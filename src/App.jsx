// src/App.jsx
import "./assets/css/App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import useToggle from "./Hooks/useToggle";

function App() {
  const { on, toggler } = useToggle(); // Custom hook for toggling modal

  const lingoArray = [
    "Very mindful, very cutesy",
    "Show me to me Rachel",
    "Slay",
    "Let them cook",
    "Mid",
    "That lives rent free in my brain",
    "This slaps",
    "That ain't it sis",
    "Wow, that's giving",
    "Do it for the plot",
    "Locked in",
    "Fax, no printer",
    "Ate. no crumbs.",
    "Periodt",
    "um, HELLO",
    "Eats",
    "type 💩",
    "That's on business",
  ];

  // State to store the current lingo
  const [currentLingo, setCurrentLingo] = useState("");

  // Function to generate random lingo from the array
  const generateLingo = () => {
    const randomIndex = Math.floor(Math.random() * lingoArray.length);
    setCurrentLingo(lingoArray[randomIndex]);
  };

  return (
    <>
      <div className="appContainer">
        <h1 className="appHeader">Lingo Generator</h1>
        {/* Lingo Generator Section */}
        <div className="card">
          <p>Stay hip with the fellow youths!</p>
          <button className="generateBtn" onClick={generateLingo}>
            Generate Lingo
          </button>
          {/* Output Section */}
          <div className="outputContainer">{currentLingo}</div>
        </div>

        {/* Upgrade Button */}
        <div className="upgradeContainer">
          <p>Unlock the full power of LingoGenerator PRO</p>
          <p>
            Get every feature the LingoGenerator has to offer including the
            LingoTranslator!
          </p>
          <button className="upgradeBtn" onClick={toggler}>
            Upgrade Now
          </button>
        </div>
      </div>

      {/* Conditionally render the Modal based on 'on' */}
      {on && <Modal toggler={toggler} />}
    </>
  );
}

export default App;
