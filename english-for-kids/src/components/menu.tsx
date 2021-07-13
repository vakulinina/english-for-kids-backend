import React from 'react';
import { NavLink } from 'react-router-dom';
import Category from '../models/category';

interface Props {
  isMenuOpen: boolean;
  isGameMode: boolean;
  hideMenu: () => void;
  categories: Category[];
}

const Menu: React.FunctionComponent<Props> = ({
  isMenuOpen, hideMenu, isGameMode, categories,
}: Props) => {
  const activeClass = isMenuOpen ? 'menu-active' : '';
  const gameModeClass = isGameMode ? 'menu-game-mode' : '';

  return (
    <ul className={`menu ${activeClass} ${gameModeClass}`}>
      <NavLink className="menu-item" to="/" exact onClick={hideMenu}>Main page</NavLink>
      {categories.map((category) => (
        <NavLink className="menu-item" to={`/${category.id}`} onClick={hideMenu} key={category.id}>
          {category.name}
        </NavLink>
      ))}
      <NavLink className="menu-item" to="/statistics" onClick={hideMenu}>Statistics</NavLink>
    </ul>
  );
};

export default Menu;
