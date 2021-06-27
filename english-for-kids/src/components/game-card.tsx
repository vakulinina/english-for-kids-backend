/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

interface Props {
  image: string,
  word: string,
  translation: string
}

const GameCard: React.FunctionComponent<Props> = ({ image, word, translation }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const sound = new Audio(`sounds/${word}.mp3`);
  const playSound = () => {
    sound.play();
  };

  return (
    <li
      className="card"
      onClick={playSound}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={isFlipped ? 'content flipped' : 'content'}>
        <div className="front">
          <div className="image-container">
            <img className="card-image" src={image} alt="" />
          </div>
          <p className="word">{word}</p>
          <button
            className="flip-button"
            onClick={(e) => {
              setIsFlipped(true);
              e.stopPropagation();
            }}
          />
        </div>
        <div className="back">
          <div className="image-container">
            <img className="card-image" src={image} alt="" />
          </div>
          <p className="word">{translation}</p>
        </div>
      </div>
    </li>
  );
};

export default GameCard;
