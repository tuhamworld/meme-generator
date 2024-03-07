import React, { useEffect, useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9vct.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, [allMemeImages]);

  function showImageUrl() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const memeUrl = allMemeImages[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memeUrl,
    }));
  }

  const handleChange = (event) => {
    const { name, type, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="first--text"
          placeholder="Shut up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="last--text"
          placeholder="and take my money"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme-btn" onClick={showImageUrl}>
          Get a new meme image
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
