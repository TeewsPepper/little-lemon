import React from 'react';



const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li >
          <a href="#">
            <img src="./menu.svg" alt="menu icon" width={30} />
          </a>
        </li>
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Menu</a></li>
        <li className="nav-item"><a href="#">Reservations</a></li>
        <li className="nav-item"><a href="#">Order-Online</a></li>
        <li className="nav-item"><a href="#">Login</a></li>
      </ul>
      <img src="./Logo.svg" alt="logo image" width={100} className="main-logo" />
    </nav>
  );
};



export default Nav;
