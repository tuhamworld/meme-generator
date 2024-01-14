import React from "react";
import memesData from "../memesData";

export default function Meme() {

  const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/9vct.jpg');


  function showImageUrl() {
    const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const memeUrl = memes[randomNumber].url;

    setMemeImage(memeUrl);
    
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

  
        <img src={memeImage} alt="" className="meme--image" />
    
    </main>
  );
}
