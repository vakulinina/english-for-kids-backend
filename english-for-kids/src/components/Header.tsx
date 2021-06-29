import React, { useState } from 'react';
import Menu from './menu';

interface Props {
  handleChange: () => void,
  isGameMode: boolean,
}

const Header: React.FunctionComponent<Props> = ({ handleChange, isGameMode }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <nav>
        <div className={isMenuOpen ? 'menu-toggle menu-toggle-active' : 'menu-toggle'}>
          <input
            type="checkbox"
            className="menu-toggle-input"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <span />
          <Menu
            isMenuOpen={isMenuOpen}
            isGameMode={isGameMode}
            hideMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      <label className="mode-toggle" htmlFor="mode-input">
        <input
          className="toggle-input visually-hidden"
          type="checkbox"
          id="mode-input"
          onChange={handleChange}
        />
        <span className="toggle-fill" />
      </label>

    </header>
  );
};

export default Header;
