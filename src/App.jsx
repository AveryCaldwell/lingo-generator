//#region imports
import ".cls/assets/css/App.css";
import { useState } from "react";
//#endregion imports

function App() {
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
  // state to store the current lingo
  const [currentLingo, setCurrentLingo] = useState("");

  // function to generate random lingo from the array
  const generateLingo = () => {
    const randomIndex = Math.floor(Math.random() * lingoArray.length);
    setCurrentLingo(lingoArray[randomIndex]);
  };

  return (
    <>
      <div className="appContainer">
        <h1 className="appHeader">Lingo Generator</h1>
        {/* LINGO GENERATOR SECTION */}
        <div className="card">
          <p>Stay hip with the fellow youths!</p>
          <button className="generateBtn" onClick={generateLingo}>
            Generate lingo{" "}
          </button>
          {/* OUTPUT SECTION */}
          <div className="outputContainer">{currentLingo}</div>
        </div>
      </div>
      {/* UPGRADE SECTION */}
      <div className="upgradeContainer">
        <p>Unlock the full power of lingoGenerator PRO </p>
        <p>
          Get every feature the lingoGenerator has to offer including the
          lingoTranslator!
        </p>
        <p>Start slaying for only $69.99/month, periodt.</p>
        <a href="#">Upgrade Up Now</a>
      </div>
    </>
  );
}

export default App;
