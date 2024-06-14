import React from "react";

function Display({ text }) {
  if (!text) return null;
  return <div id="display">{text}</div>;
}

export default Display;
