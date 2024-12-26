import React, { useState } from "react";
import "./App.css";

const messages = [
  "Small message for you, my friend! Click this to open!!",
  "You are the rare person whom everyone cannot have in their life. Your behaviour makes you even more beautiful than you seem naturally. I don't want you to lose yourself because of the person who doesn't even think about you. We need to have a soulmate who makes us a better person, who inspires us, the one who knows us better than anyone else in the world, the one who you can carry with you forever as your strength. But why you make yourself sad for the one who doesn't value you, my dear? Please accept the reality ma and remember that God has a big plan for you, that's why He showed who is what. So take it as a lesson but please don't stay stuck there. I know it is too tough period but nothing is impossible ma just remember you are surrounded by people who love you. You might think why god is giving these many problems to me at a time but remember you are about to get most amazing things in ur life for sure.Please be happy in your heart, my dear. That day you will see many other souls are happy along with yours! I will definitely be one of them.",
];

const App = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(-1);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showGift, setShowGift] = useState(true);

  const handleGiftClick = () => {
    if (!musicPlaying) {
      const audio = document.getElementById("background-music");
      audio.play();
      setMusicPlaying(true);
    }

    setCurrentMessageIndex(0); // Start with the first message
    setShowGift(false); // Hide the gift box
  };

  const handleNextMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex < messages.length - 1 ? prevIndex + 1 : -1
    );
  };

  const getMessageClass = (index) => {
    return index === 0 ? "message first-message" : "message subsequent-message";
  };

  return (
    <div className="app">
      <audio id="background-music" src="/song.mp3" loop />
      {showGift ? (
        <img
          className="gift-box"
          src="/gift.webp"
          alt="Gift Box"
          onClick={handleGiftClick}
          title="Click me to reveal messages!"
          style={{ backgroundColor: "transparent" }}
        />
      ) : currentMessageIndex !== -1 ? (
        currentMessageIndex < messages.length - 1 ? (
          <div
            className={getMessageClass(currentMessageIndex)}
            onClick={handleNextMessage}
          >
            {messages[currentMessageIndex]}
          </div>
        ) : (
          <div className={getMessageClass(currentMessageIndex)}>
            {messages[currentMessageIndex]}
          </div>
        )
      ) : null}
    </div>
  );
};

export default App;
