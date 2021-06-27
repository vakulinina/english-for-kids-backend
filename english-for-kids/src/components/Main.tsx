import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FunctionComponent = () => (
  <main className="main-container">
    <Link className="main-card green" to="/action-a">
      <img src="images/action-set-a/jump.jpg" alt="action" />
      Action (set A)
    </Link>
    <Link className="main-card green" to="/action-b">
      <img src="images/action-set-b/play.jpg" alt="action" />
      Action (set B)
    </Link>
    <Link className="main-card green" to="/action-c">
      <img src="images/action-set-c/sleep.jpg" alt="action" />
      Action (set C)
    </Link>
    <Link className="main-card green" to="/adjective">
      <img src="images/adjective/hot.jpg" alt="adjective" />
      Adjective
    </Link>
    <Link className="main-card green" to="/animal-a">
      <img src="images/animal-set-a/sheep.jpg" alt="animal" />
      Animal (set A)
    </Link>
    <Link className="main-card green" to="/animal-b">
      <img src="images/animal-set-b/bird.jpg" alt="animal" />
      Animal (set B)
    </Link>
    <Link className="main-card green" to="/clothes">
      <img src="images/clothes/boot.jpg" alt="clothes" />
      Clothes
    </Link>
    <Link className="main-card green" to="/emotion">
      <img src="images/emotion/smile.jpg" alt="emotions" />
      Emotions
    </Link>
  </main>
);

export default Main;
