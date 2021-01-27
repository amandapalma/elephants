import React from 'react';

import { Aside } from './styled';
import { ItemStyled } from './styled';
// import { Elephant } from './types';

export default function ElephantPreview() {
  return (
    <Aside>
      <ItemStyled>
        {/* <div> */}
        {/* <img alt="elephant" src={clickedElephant.img}></img>
        </div>
        <h2>{clickedElephant.name}</h2>
        <h3>{clickedElephant.age}</h3> */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lobortis lacus in mauris finibus congue. Praesent libero erat, congue
          eu nulla at, feugiat cursus nisl.
        </p>
      </ItemStyled>
    </Aside>
  );
}
