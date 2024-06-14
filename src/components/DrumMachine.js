import React, { useEffect, useState } from "react";

// styles
import "./DrumMachine.css";

// project imports
import Display from "./Display";
import DrumPad from "./DrumPad";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function DrumMachine() {
  const [display, setDisplay] = useState("");

  const playSound = (id, key) => {
    const audio = document.getElementById(key);
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
    setDisplay(id);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pad = drumPads.find((p) => p.key === e.key.toUpperCase());
      if (pad) {
        playSound(pad.id, pad.key);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <Display text={display} />
      <div className="pad-container">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.id}
            id={pad.id}
            keyTrigger={pad.key}
            src={pad.src}
            playSound={() => playSound(pad.id, pad.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;
