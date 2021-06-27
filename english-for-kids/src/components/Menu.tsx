import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  isMenuOpen: boolean;
  hideMenu: () => void;
}

const Menu: React.FunctionComponent<Props> = ({ isMenuOpen, hideMenu }: Props) => (
  <ul className={isMenuOpen ? 'menu menu-active' : 'menu'}>
    <NavLink className="menu-item" to="/" exact onClick={hideMenu}>Main page</NavLink>
    <NavLink className="menu-item" to="/action-a" onClick={hideMenu}>Action (set A)</NavLink>
    <NavLink className="menu-item" to="/action-b" onClick={hideMenu}>Action (set B)</NavLink>
    <NavLink className="menu-item" to="/action-c" onClick={hideMenu}>Action (set C)</NavLink>
    <NavLink className="menu-item" to="/adjective" onClick={hideMenu}>Adjective</NavLink>
    <NavLink className="menu-item" to="/animal-a" onClick={hideMenu}>Animal (set A)</NavLink>
    <NavLink className="menu-item" to="/animal-b" onClick={hideMenu}>Animal (set B)</NavLink>
    <NavLink className="menu-item" to="/clothes" onClick={hideMenu}>Clothes</NavLink>
    <NavLink className="menu-item" to="/emotion" onClick={hideMenu}>Emotions</NavLink>
  </ul>
);

export default Menu;
