import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data/cards.json';

interface Props {
  isMenuOpen: boolean,
  isGameMode: boolean,
  hideMenu: () => void,
}

const Menu: React.FunctionComponent<Props> = ({ isMenuOpen, hideMenu, isGameMode }: Props) => {
  const activeClass = isMenuOpen ? 'menu-active' : '';
  const gameModeClass = isGameMode ? 'menu-game-mode' : '';

  return (
    <ul className={`menu ${activeClass} ${gameModeClass}`}>
      <NavLink className="menu-item" to="/" exact onClick={hideMenu}>Main page</NavLink>
      {Object.keys(data).map((key) => (
        <NavLink className="menu-item" to={`/${key}`} onClick={hideMenu} key={key}>
          {data[key][0].category}
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;
