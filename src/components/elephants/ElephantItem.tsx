import React from 'react';
import { Link } from 'react-router-dom';
import { ItemStyled } from '../../styles/styled';
import { Elephant } from '../../utils/types';

export default function ElephantItem(props: { data: Elephant }) {
  return (
    <Link to={`/preview/${props.data.id}`}>
      <ItemStyled>
        <li>
          <div>
            <img alt="elephant" src={props.data.img}></img>
          </div>
          <h2>{props.data.name}</h2>
        </li>
      </ItemStyled>
    </Link>
  );
}
