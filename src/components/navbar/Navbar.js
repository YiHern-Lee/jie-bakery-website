import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import bakeryIcon from '../../img/bakery-logo.png'
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => setOpen(false);

  return (
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <img className='navbar-logo-img' src={bakeryIcon} alt='Jie Bakery Logo'/>
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            {
                open ? 
                    <CloseIcon />
                :
                    <MenuIcon /> 
            }
            </div>
          <ul className={open ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/location'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Location
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;