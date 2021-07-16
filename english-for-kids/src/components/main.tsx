import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../models/category';
import BASE_URL from '../data/url';

interface Props {
  isGameMode: boolean;
  categories: Category[];
}

const Main: React.FunctionComponent<Props> = ({ isGameMode, categories }: Props) => {
  const gameModeClass = isGameMode ? 'main-card-game' : '';

  return (
    <main className="main-container">
      {categories.map(({ id, image, name }: Category) => (
        <Link className={`main-card ${gameModeClass}`} to={`/${id}`} key={id}>
          <img src={image ? `${BASE_URL}/public/${image}` : './icons/no_image_backdrop.jpeg'} alt={name} />
          {name}
        </Link>
      ))}
    </main>
  );
};

export default Main;
