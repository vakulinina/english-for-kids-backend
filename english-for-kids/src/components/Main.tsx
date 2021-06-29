import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isGameMode: boolean,
}

const Main: React.FunctionComponent<Props> = ({ isGameMode }: Props) => {
  const gameModeClass = isGameMode ? 'main-card-game' : '';

  return (
    <main className="main-container">
      <Link className={`main-card ${gameModeClass}`} to="/action-a">
        <img src="images/action-set-a/jump.jpg" alt="action" />
        Action (set A)
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/action-b">
        <img src="images/action-set-b/play.jpg" alt="action" />
        Action (set B)
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/action-c">
        <img src="images/action-set-c/sleep.jpg" alt="action" />
        Action (set C)
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/adjective">
        <img src="images/adjective/hot.jpg" alt="adjective" />
        Adjective
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/animal-a">
        <img src="images/animal-set-a/sheep.jpg" alt="animal" />
        Animal (set A)
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/animal-b">
        <img src="images/animal-set-b/bird.jpg" alt="animal" />
        Animal (set B)
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/clothes">
        <img src="images/clothes/boot.jpg" alt="clothes" />
        Clothes
      </Link>
      <Link className={`main-card ${gameModeClass}`} to="/emotion">
        <img src="images/emotion/smile.jpg" alt="emotions" />
        Emotions
      </Link>
    </main>
  );
};

export default Main;
