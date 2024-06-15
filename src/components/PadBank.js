import React from "react";
import DrumPad from "./DrumPad";

const PadBank = ({ sounds, power, updateDisplay }) => {
  return (
    <div className="btn-grid">
      {sounds.map((sound) => (
        <DrumPad
          key={sound.id}
          clipUrl={power ? sound.url : "#"}
          clipId={sound.id}
          keyCode={sound.keyCode}
          keyTrigger={sound.keyTrigger}
          updateDisplay={updateDisplay}
        />
      ))}
    </div>
  );
};

export default PadBank;
