import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/9vct.jpg'
  }
  );

  const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes)


  function showImageUrl() {
    // const memes = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const memeUrl = allMemeImages[randomNumber].url;

    setMeme({
      ...meme,
      randomImage: memeUrl
    });
    
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
