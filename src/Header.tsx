import React from 'react';
import { Link } from 'react-router-dom';
import elephantHead from './assets/elephant-head.png';
import './App.css';
import { HeaderStyled } from './styled';
import { Logo } from './styled';
import { LogoImg } from './styled';
import { NavList } from './styled';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t, i18n] = useTranslation('global');
  return (
    <HeaderStyled>
      <Link to="/">
        <Logo>
          <LogoImg alt="elephant" src={elephantHead}></LogoImg>
          <h3>{t('header.elephants')}</h3>
        </Logo>
      </Link>

      <nav>
        <NavList>
          <li>
            <Link to="/">{t('header.home')}</Link>
          </li>
          <li>
            <Link to="/elephants">{t('header.elephants')}</Link>
          </li>
          <button onClick={() => i18n.changeLanguage('en')}>EN</button>
          <button onClick={() => i18n.changeLanguage('es')}>ES</button>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
