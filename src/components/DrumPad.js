import React from "react";

function DrumPad({ id, keyTrigger, src, playSound }) {
  return (
    <div id={id} className="drum-pad" onClick={playSound}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={src}></audio>
    </div>
  );
}

export default DrumPad;
