import React from 'react';
import elephant from './assets/elephant.png';
import { ItemStyled } from './styled';

const Item = () => {
  return (
    <ItemStyled>
      <div>
        <img alt="elephant" src={elephant}></img>
      </div>
      <h2>elphant name</h2>
    </ItemStyled>
  );
};

export default Item;
