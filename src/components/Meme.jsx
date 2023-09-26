import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function showImageUrl() {
    const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const url = memes[randomNumber].url;
    alert(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="first--text" placeholder="Shut up" />
        <input
          type="text"
          className="last--text"
          placeholder="and take my money"
        />
        <button className="meme-btn" onClick={showImageUrl}>
          Get a new meme image
        </button>
      </div>
    </main>
  );
}
