import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminHeader: React.FunctionComponent = () => (
  <header className="admin-header">
    <nav className="admin-nav-links">
      <NavLink className="admin-nav-link" to="/admin" exact>Categories</NavLink>
      <NavLink className="admin-nav-link admin-nav-link-words" to="/admin/words" exact>Words</NavLink>
    </nav>
    <button className="logout-button" type="button">Log out</button>
  </header>
);

export default AdminHeader;
