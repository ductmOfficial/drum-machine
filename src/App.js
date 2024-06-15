import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

// project imports
import "./App.css";
import PadBank from "./components/PadBank";

const bankOneSounds = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwoSounds = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const App = () => {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const [sounds, setSounds] = useState(bankOneSounds);
  const [currentSoundsId, setCurrentSoundsId] = useState("Heater Kit");
  const [sliderValue, setSliderValue] = useState(0.3);

  useEffect(() => {
    const clips = Array.from(document.getElementsByClassName("clip"));
    clips.forEach((clip) => {
      clip.volume = sliderValue;
    });
  }, [sliderValue]);

  const selectBank = () => {
    if (power) {
      if (currentSoundsId === "Heater Kit") {
        setSounds(bankTwoSounds);
        setDisplay("Smooth Piano Kit");
        setCurrentSoundsId("Smooth Piano Kit");
      } else {
        setSounds(bankOneSounds);
        setDisplay("Heater Kit");
        setCurrentSoundsId("Heater Kit");
      }
    }
  };

  const powerControl = () => {
    setPower(!power);
    setDisplay(String.fromCharCode(160));
  };

  const displaySoundName = (name) => {
    if (power) {
      setDisplay(name);
    }
  };

  const clearDisplay = () => {
    setDisplay(String.fromCharCode(160));
  };

  const adjustVolume = (e) => {
    if (power) {
      const value = e.target.value;
      setSliderValue(value);
      setDisplay(`Volume: ${Math.round(value * 100)}`);

      setTimeout(() => {
        clearDisplay();
      }, 1000);
    }
  };

  return (
    <div className="App bg-dark text-light" id="drum-machine">
      <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
        <div className="card w-75 w-lg-50 border-0">
          <div className="card-body bg-warning">
            <div className="row">
              <div className="col-6">
                <PadBank
                  sounds={sounds}
                  power={power}
                  updateDisplay={displaySoundName}
                />
              </div>
              <div className="col-6">
                <div>
                  <div className="custom-control custom-control-inline custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="power"
                      onChange={powerControl}
                      defaultChecked={power}
                    />
                    <label className="custom-control-label" htmlFor="power">
                      Power
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="bank"
                      onChange={selectBank}
                    />
                    <label className="custom-control-label" htmlFor="bank">
                      Bank
                    </label>
                  </div>
                  <h1 id="display" className="text-center mt-3">
                    {display}
                  </h1>
                  <form className="mt-4">
                    <div className="form-group">
                      <input
                        type="range"
                        className="custom-range"
                        max="1"
                        min="0"
                        step="0.01"
                        onChange={adjustVolume}
                        value={sliderValue}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
