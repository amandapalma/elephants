import React from 'react';
import elephant from './assets/elephant.png';
import { MainImg } from './styled';
import { ItemsContainer } from './styled';

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
