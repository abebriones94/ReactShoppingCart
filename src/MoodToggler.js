import React from "react";
import { useState } from "react";
import "./MoodToggler.css";

function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);

  return (
    <h1
      className="MoodToggler"
      style={{ color: isHappy ? "red" : "blue" }}
      onClick={toggleIsHappy}
    >
      {isHappy ? ":)" : ":("}
    </h1>
  );
}

export default MoodToggler;
