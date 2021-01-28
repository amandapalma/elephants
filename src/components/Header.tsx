import React from 'react';
import { Link } from 'react-router-dom';
import elephantHead from '../assets/elephant-head.png';
import { HeaderStyled } from '../styles/styled';
import { Logo } from '../styles/styled';
import { LogoImg } from '../styles/styled';
import { NavList } from '../styles/styled';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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
            <Link to="/">{t('header.home')}</Link>
          </li>
          <li>
            <Link to="/elephants">{t('header.elephants')}</Link>
          </li>
          <button onClick={() => i18next.changeLanguage('en')}>EN</button>
          <button onClick={() => i18next.changeLanguage('es')}>ES</button>
        </NavList>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
