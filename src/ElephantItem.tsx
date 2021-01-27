import React from 'react';
import { ItemStyled } from './styled';
import { Elephant } from './types';

export default function ElephantItem(props: { data: Elephant }) {
  console.log(props);
  return (
    <ItemStyled>
      <div>
        <img alt="elephant" src={props.data.img}></img>
      </div>
      <h2>{props.data.name}</h2>
    </ItemStyled>
  );
}
