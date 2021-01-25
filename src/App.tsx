import React from 'react';
import elephant from './assets/elephant.png';
import elephantHead from './assets/elephant-head.png';
import './App.css';
import { Header } from './styled';
import { Logo } from './styled';
import { LogoImg } from './styled';
import { Main } from './styled';
import { NavList } from './styled';
import { MainImg } from './styled';
import { ItemsContainer } from './styled';
import { Item } from './styled';
import { GridContainer } from './styled';
import { Aside } from './styled';

function App() {
  return (
    <div className="App">
      <Header className="header">
        {/* <Link to="/"> */}
        <Logo>
          <LogoImg alt="elephant" src={elephantHead}></LogoImg>
          <h3>elephants</h3>
        </Logo>
        {/* </Link> */}
        <nav>
          <NavList>
            <li>
              <a
                href="https://github.com/amandapalma/elephants"
                title="go to home"
                target="_blank"
                rel="noreferrer"
              >
                home
              </a>
            </li>
            <li>
              <a
                href="https://github.com/amandapalma/elephants"
                title="go to elephants"
                target="_blank"
                rel="noreferrer"
              >
                elephants
              </a>
            </li>
          </NavList>
        </nav>
      </Header>
      <Main>
        <h1>elephants</h1>
        <MainImg>
          <img alt="indian elephant" src={elephant}></img>
        </MainImg>
        <ItemsContainer>
          <div className="textItem">
            <i>🐘 1</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 2</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 3</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 1</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 2</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 3</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 1</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 2</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
          <div className="textItem">
            <i>🐘 3</i>
            <p>
              It was six men of Indostan To learning much inclined, Who went to
              see the Elephant (Though all of them were blind), That each by
              observation Might satisfy his mind.
            </p>
          </div>
        </ItemsContainer>
        <p>John Godfrey Saxe (1816-1887)</p>

        {/* ELAPHANT PAGE  */}
        {/* Header */}
        <GridContainer>
          <ItemsContainer>
            <Item>
              <div>
                <img alt="elephant" src={elephant}></img>
              </div>
              <h2>elphant name</h2>
            </Item>
            <Item>
              <div>
                <img alt="elephant" src={elephant}></img>
              </div>
              <h2>elphant name</h2>
            </Item>
            <Item>
              <div>
                <img alt="elephant" src={elephant}></img>
              </div>
              <h2>elphant name</h2>
            </Item>
            <Item>
              <div>
                <img alt="elephant" src={elephant}></img>
              </div>
              <h2>elphant name</h2>
            </Item>
          </ItemsContainer>
          <Aside>
            <Item>
              <div>
                <img alt="elephant" src={elephantHead}></img>
              </div>
              <h2>name</h2>
              <h3>age</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum lobortis lacus in mauris finibus congue. Praesent
                libero erat, congue eu nulla at, feugiat cursus nisl.
              </p>
            </Item>
          </Aside>
        </GridContainer>
      </Main>
    </div>
  );
}

export default App;
