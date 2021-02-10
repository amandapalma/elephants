import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import elephantHead from '../assets/elephant-head.png';
import {
  HeaderStyled,
  NavButton,
  Logo,
  LogoImg,
  NavList,
} from '../styles/styled';

const Header = () => {
  const { t } = useTranslation();
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
            <NavButton>
              <Link to="/">{t('header.home')}</Link>
            </NavButton>
          </li>
          <li>
            <NavButton>
              <Link to="/elephants">{t('header.elephants')} </Link>
            </NavButton>
          </li>
          <span>| </span>
          <li>
            <NavButton onClick={() => i18next.changeLanguage('en')}>
              <p>EN</p>
            </NavButton>
          </li>
          <li>
            <NavButton onClick={() => i18next.changeLanguage('es')}>
              <p>ES</p>
            </NavButton>
          </li>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
