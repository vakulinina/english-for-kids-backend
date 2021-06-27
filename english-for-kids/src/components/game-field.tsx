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
  category: string
}

const GameField: React.FunctionComponent = () => {
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
          />
        ))}
      </ul>
    </main>
  );
};

export default GameField;
