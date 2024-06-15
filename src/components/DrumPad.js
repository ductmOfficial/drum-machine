import React, { useCallback, useEffect, useRef } from "react";

const DrumPad = ({ clipId, clipUrl, keyCode, keyTrigger, updateDisplay }) => {
  const audioRef = useRef(null);

  const playSound = useCallback(() => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      updateDisplay(clipId.replace(/-/g, " "));
    }
  }, [clipId, updateDisplay]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === keyCode) {
        playSound();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyCode, playSound]);

  return (
    <button
      className="btn btn-dark btn-lg drum-pad"
      id={clipId}
      onClick={playSound}
    >
      {keyTrigger}
      <audio className="clip" ref={audioRef} id={keyTrigger} src={clipUrl} />
    </button>
  );
};

export default DrumPad;
