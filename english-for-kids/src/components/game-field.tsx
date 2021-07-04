import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import data from '../data/cards.json';
import GameCard from './game-card';

interface Card {
  word: string,
  translation: string,
  image: string,
  category: string
}

interface UrlParams {
  category: string,
}

interface Props {
  isGameMode: boolean,
  countMistakes: (mistakes: number) => void,
}

const GameField: React.FunctionComponent<Props> = ({ isGameMode, countMistakes }: Props) => {
  const { category } = useParams() as UrlParams;
  const history = useHistory();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null as HTMLAudioElement | null);

  const cards: Card[] = data[category];
  const words = cards.map(({ word }) => word);

  const playGame = () => {
    const gameCards = document.querySelectorAll('.card') as NodeListOf<HTMLLIElement>;
    let currentWordIndex = 0;
    let mistakes = 0;

    setIsGameStarted(true);

    const playWord = () => {
      const audio = new Audio(`./sounds/${words[currentWordIndex]}.mp3`);
      audio.play();
      setCurrentAudio(audio);
    };

    const handleGameCardClick = (card: HTMLLIElement) => {
      if (words[currentWordIndex] === card.dataset.word) {
        card.classList.add('disabled');
        new Audio('./sounds/correct.mp3').play();

        if (currentWordIndex < words.length - 6) {
          currentWordIndex += 1;
          setTimeout(playWord, 1000);
        } else {
          countMistakes(mistakes);
          setTimeout(() => history.push('/final-page'), 1000);
        }
      } else {
        mistakes += 1;
        new Audio('./sounds/error.mp3').play();
      }
    };

    gameCards.forEach((card) => card.addEventListener('click', () => handleGameCardClick(card)));

    playWord();
  };

  const handleGameButton = () => {
    if (isGameStarted) {
      currentAudio?.play();
    } else {
      playGame();
    }
  };

  return (
    <main className="game-field">
      <ul className="cards">
        {cards.map(({ image, word, translation }) => (
          <GameCard
            image={image}
            word={word}
            translation={translation}
            key={word}
            isGameMode={isGameMode}
          />
        ))}
      </ul>
      {isGameMode
        ? <button className="game-button" type="button" onClick={handleGameButton}>{isGameStarted ? 'repeat' : 'start'}</button>
        : ''}
    </main>
  );
};

export default GameField;
