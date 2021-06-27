import React, { useState } from 'react';
import Menu from './menu';

const Header: React.FunctionComponent = () => {
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
          <Menu isMenuOpen={isMenuOpen} hideMenu={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>

      <label className="mode-toggle" htmlFor="mode-input">
        <input className="toggle-input visually-hidden" type="checkbox" id="mode-input" />
        <span className="toggle-fill" />
      </label>

    </header>
  );
};

export default Header;
