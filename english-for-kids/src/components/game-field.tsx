import React from 'react';
import { useParams } from 'react-router-dom';
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
}

const GameField: React.FunctionComponent<Props> = ({ isGameMode }: Props) => {
  const { category } = useParams() as UrlParams;

  const cards: Card[] = data[category];

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
        ? <button className="start-button" type="button">start</button>
        : ''}
    </main>
  );
};

export default GameField;
