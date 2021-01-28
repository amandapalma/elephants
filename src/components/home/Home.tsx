import React from 'react';
import elephant from '../../assets/elephant.png';
import { MainImg } from '../../styles/styled';
import { ItemsContainer } from '../../styles/styled';
import Icon from '@mdi/react';
import {
  mdiNavigation,
  mdiEye,
  mdiWall,
  mdiSnake,
  mdiTree,
  mdiPaletteSwatch,
  mdiJumpRope,
  mdiElephant,
  mdiHeadSnowflake,
} from '@mdi/js';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>
        <p>{t('header.elephants')}</p>
      </h1>
      <MainImg>
        <img alt="indian elephant" src={elephant}></img>
      </MainImg>
      <ItemsContainer>
        <div className="textItem">
          <Icon
            path={mdiEye}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />

          <p>{t('home.p1')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiWall}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />
          <p>{t('home.p2')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiNavigation}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={-125}
            color="black"
          />
          <p>{t('home.p3')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiSnake}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p4')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiTree}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p5')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiPaletteSwatch}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
          />
          <p>{t('home.p6')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiJumpRope}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p7')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiHeadSnowflake}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p8')}</p>
        </div>
        <div className="textItem">
          <Icon
            path={mdiElephant}
            title="User Profile"
            size={1}
            horizontal
            vertical
            color="black"
            rotate={180}
          />
          <p>{t('home.p9')}</p>
        </div>
      </ItemsContainer>
      <p>{t('home.note')}</p>
    </div>
  );
}
