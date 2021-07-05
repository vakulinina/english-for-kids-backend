import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/cards.json';

interface Props {
  isGameMode: boolean,
}

const Main: React.FunctionComponent<Props> = ({ isGameMode }: Props) => {
  const gameModeClass = isGameMode ? 'main-card-game' : '';

  return (
    <main className="main-container">
      {Object.keys(data).map((key) => (
        <Link className={`main-card ${gameModeClass}`} to={`/${key}`} key={key}>
          <img src={data[key][0].image} alt="action" />
          {data[key][0].category}
        </Link>
      ))}
    </main>
  );
};

export default Main;
