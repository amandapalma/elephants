import React, { useEffect, useState } from 'react';
import getDataFromApi from '../../services/getDataFromApi';
import ElephantItem from './ElephantItem';
import { Elephant } from '../../utils/types';
// import Grid from '@material-ui/core/Grid';
import { ItemsContainer } from '../../styles/styled';

export default function ElephantList() {
  const [info, setInfo] = useState<Elephant[]>([]);

  useEffect(() => {
    getDataFromApi().then((res) => {
      setInfo(res);
    });
  }, []);

  //   return (
  //     <Grid container spacing={3}>
  //       {/* <ItemsContainer> */}
  //       {info.map((elephant) => {
  //         return (
  //           <Grid item xs={12} sm={4}>
  //             <ElephantItem data={elephant} key={elephant.id} />
  //           </Grid>
  //         );
  //       })}
  //       {/* </ItemsContainer> */}
  //     </Grid>
  //   );
  // }

  return (
    <ItemsContainer>
      {info.map((elephant) => {
        return <ElephantItem data={elephant} key={elephant.id} />;
      })}
    </ItemsContainer>
  );
}
