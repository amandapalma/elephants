import React from 'react';
import Item from './Item';
import Card from './Card';
import { ItemsContainer } from './styled';
import { GridContainer } from './styled';

const Elephants = () => {
  // console.log(props);
  // console.log(typeof (props));
  return (
    <GridContainer>
      <ItemsContainer>
        {/* {props.elephants.map((elephant, index) => {
          return <Item {...elephant} key={index} />;
        })} */}
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
