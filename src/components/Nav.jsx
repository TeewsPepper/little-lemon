import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ isFooter = false }) => {
  return (
    <nav className={isFooter ? 'footer-nav' : 'main-nav'}>
      
      
        <img src="./Logo.svg" alt="logo image" width={250} className={isFooter ? 'footer-logo' : 'main-logo'}/>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order-Online</a></li>
        {!isFooter && <li><a href="#">Login</a></li>}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isFooter: PropTypes.bool, // Define que `isFooter` debe ser un booleano
};

export default Nav;
