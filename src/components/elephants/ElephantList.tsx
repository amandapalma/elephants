import React from 'react';
import ElephantItem from './ElephantItem';
// import ElephantPreview from './ElephantPreview';
import { ItemsContainer } from '../../styles/styled';
import { GridContainer } from '../../styles/styled';
import { Elephant } from '../../utils/types';

export default function ElephantList(props: { elephants: Elephant[] }) {
  console.log(props);
  return (
    <GridContainer>
      <ItemsContainer>
        {props.elephants.map((elephant) => {
          return <ElephantItem data={elephant} key={elephant.id} />;
        })}
      </ItemsContainer>
      {/* <ElephantPreview clickedElephant={foundedElephant} /> */}
    </GridContainer>
  );
}
