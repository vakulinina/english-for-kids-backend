import React, { useState } from 'react';
import Menu from './menu';

const Header: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="header-container">
      <nav>
        <div className={show ? 'menu-toggle menu-toggle-active' : 'menu-toggle'}>
          <input
            type="checkbox"
            className="menu-toggle-input"
            onClick={() => setShow(!show)}
          />
          <span />
          <Menu isMenuOpen={show} />
        </div>
      </nav>

      <label className="theme-toggle">
        <input className="toggle-input visually-hidden" type="checkbox" />
        <span className="toggle-fill"></span>
      </label>

    </header>
  );
};

export default Header;
