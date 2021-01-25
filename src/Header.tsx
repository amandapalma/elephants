import React from 'react';
import { Link } from 'react-router-dom';
import elephantHead from './assets/elephant-head.png';
import './App.css';
import { HeaderStyled } from './styled';
import { Logo } from './styled';
import { LogoImg } from './styled';
import { NavList } from './styled';

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo>
          <LogoImg alt="elephant" src={elephantHead}></LogoImg>
          <h3>elephants</h3>
        </Logo>
      </Link>

      <nav>
        <NavList>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/elephants">elephants</Link>
          </li>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
