import React from 'react';
import elephantHead from './assets/elephant-head.png';
import { Aside } from './styled';
import { ItemStyled } from './styled';

const Card = () => {
  return (
    <Aside>
      <ItemStyled>
        <div>
          <img alt="elephant" src={elephantHead}></img>
        </div>
        <h2>name</h2>
        <h3>age</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lobortis lacus in mauris finibus congue. Praesent libero erat, congue
          eu nulla at, feugiat cursus nisl.
        </p>
      </ItemStyled>
    </Aside>
  );
};

export default Card;
