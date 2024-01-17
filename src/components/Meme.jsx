import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/9vct.jpg'
  }
  );

  const [allMemeImages, setAllMemeImages] = useState(memesData)


  function showImageUrl() {
    const memes = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const memeUrl = memes[randomNumber].url;

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memeUrl
    }));
    
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

  
        <img src={meme.randomImage} alt="" className="meme--image" />
    
    </main>
  );
}
