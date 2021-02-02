import React, { useEffect, useState } from 'react';
import ElephantItem from './ElephantItem';
// import ElephantPreview from './ElephantPreview';
import { Aside, ItemsContainer } from '../../styles/styled';
import { GridContainer } from '../../styles/styled';
import { Elephant } from '../../utils/types';
import getDataFromApi from '../../services/getDataFromApi';

export default function ElephantList() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  return (
    <GridContainer>
      <ItemsContainer>
        {info.map((elephant) => {
          return <ElephantItem data={elephant} key={elephant.id} />;
        })}
      </ItemsContainer>
      <Aside>
        {/* <ElephantPreview elephants={info}></ElephantPreview> */}
      </Aside>
    </GridContainer>
  );
}
