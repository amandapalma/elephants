import React from 'react';
import Item from './Item';
import Card from './Card';

import { ItemsContainer } from './styled';

import { GridContainer } from './styled';

const Elephants = () => {
  return (
    <GridContainer>
      <ItemsContainer>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </ItemsContainer>
      <Card></Card>
    </GridContainer>
  );
};

export default Elephants;
