import React from "react";
import trollFace from "../assets/troll-face.png";

export default function () {
  return (
    <header>
      <nav>
        <img
          src={trollFace}
          width="32px"
          height="27px"
          className="header--image"
        />

        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </nav>
    </header>
  );
}
