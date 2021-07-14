import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../models/category';

interface Props {
  isGameMode: boolean;
  categories: Category[];
}

const Main: React.FunctionComponent<Props> = ({ isGameMode, categories }: Props) => {
  const gameModeClass = isGameMode ? 'main-card-game' : '';

  return (
    <main className="main-container">
      {categories.map((category: Category) => (
        <Link className={`main-card ${gameModeClass}`} to={`/${category.id}`} key={category.id}>
          <img src={category.image} alt={category.name} />
          {category.name}
        </Link>
      ))}
    </main>
  );
};

export default Main;
