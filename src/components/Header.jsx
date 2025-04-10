import React from 'react';


function Header() {
  return (
    <header className="header">
      <h1 className="logo">PsyRehab</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#">Головна</a></li>
          <li><a href="#">Послуги</a></li>
          <li><a href="#">Про нас</a></li>
        </ul>
      </nav>
      <button className="login-button">Увійти</button>
    </header>
  );
}

export default Header;

