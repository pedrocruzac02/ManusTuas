import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import GB from 'country-flag-icons/react/3x2/GB';

import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src={`${process.env.PUBLIC_URL}/horizontal.png`} alt="Logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Início
            </Link>
          </li>
          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link 
              to='/manutuas' 
              className='nav-links' 
              onClick={closeMobileMenu}
            >
              ManusTuas <ArrowDropDownIcon />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/especialidades' className='nav-links' onClick={closeMobileMenu}>
              Especialidades
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/equipa' className='nav-links' onClick={closeMobileMenu}>
              Equipa
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/apoio-utente' className='nav-links' onClick={closeMobileMenu}>
              Apoio Utente
            </Link>
          </li>
          <div className='navbar-contact-info'>
          <span className='navbar-separator'>|</span>
          <MapIcon className='map-icon' style={{ color: 'black', fontSize: '1.25em', margin: '0 7.5px'}} /> 
          <span className='navbar-contact-item'>
          (+351) 966 466 836
          </span>
          <span className='navbar-separator'>|</span>
          <div className='language-switcher'>
          <GB title="English" className='flag-icon' />
          </div>
        </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
