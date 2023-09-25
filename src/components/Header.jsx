import React from "react";
import trollFace from "../assets/troll-face.png";

export default function () {
  return (
    <header>
      <nav>
        <img src={trollFace} width="32px" height="27px" />
        <h3>Meme Generator</h3>
        <h4>React Course - Project 3</h4>
      </nav>
    </header>
  );
}
