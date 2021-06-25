import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  isMenuOpen: boolean;
}

const Menu: React.FunctionComponent<Props> = ({ isMenuOpen }: Props) => (
  <ul className={isMenuOpen ? 'menu menu-active' : 'menu'}>
    <NavLink className="menu-item" to="/" exact>Main page</NavLink>
    <NavLink className="menu-item" to="/action-a">Action (set A)</NavLink>
    <NavLink className="menu-item" to="/action-b">Action (set B)</NavLink>
    <NavLink className="menu-item" to="/action-c">Action (set C)</NavLink>
    <NavLink className="menu-item" to="/adjective">Adjective</NavLink>
    <NavLink className="menu-item" to="/animal-a">Animal (set A)</NavLink>
    <NavLink className="menu-item" to="/animal-b">Animal (set B)</NavLink>
    <NavLink className="menu-item" to="/clothes">Clothes</NavLink>
    <NavLink className="menu-item" to="/emotion">Emotions</NavLink>
  </ul>
);

export default Menu;
