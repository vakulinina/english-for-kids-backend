import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Category from '../models/category';
import LoginModal from './login-modal';

interface Props {
  isMenuOpen: boolean;
  isGameMode: boolean;
  hideMenu: () => void;
  categories: Category[];
}

const Menu: React.FunctionComponent<Props> = ({
  isMenuOpen, hideMenu, isGameMode, categories,
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const activeClass = isMenuOpen ? 'menu-active' : '';
  const gameModeClass = isGameMode ? 'menu-game-mode' : '';

  return (
    <>
      <div className={`menu ${activeClass} ${gameModeClass}`}>
        <NavLink className="menu-item" to="/" exact onClick={hideMenu}>Main page</NavLink>
        {categories.map((category) => (
          <NavLink className="menu-item" to={`/${category.id}`} onClick={hideMenu} key={category.id}>
            {category.name}
          </NavLink>
        ))}
        <NavLink className="menu-item" to="/statistics" onClick={hideMenu}>Statistics</NavLink>
        <button className="login-button" type="button" onClick={() => setShowModal(true)}>Login</button>
        {showModal ? (
          <LoginModal onCloseModal={() => {
            setShowModal(false);
          }}
          />
        ) : ''}
      </div>
    </>
  );
};

export default Menu;
