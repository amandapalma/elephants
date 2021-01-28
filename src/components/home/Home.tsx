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
// import { useTranslation } from 'react-i18next';

const Home = () => {
  // const { t } = useTranslation();
  return (
    <div>
      <h1>elephants</h1>
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

          {/* <p>{t('home.p1')}</p> */}
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
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
          <p>
            It was six men of Indostan To learning much inclined, Who went to
            see the Elephant (Though all of them were blind), That each by
            observation Might satisfy his mind.
          </p>
        </div>
      </ItemsContainer>
      <p>John Godfrey Saxe (1816-1887)</p>
    </div>
  );
};

export default Home;
