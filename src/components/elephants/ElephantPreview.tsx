import React from 'react';
import { useParams } from 'react-router-dom';
import { Aside } from '../../styles/styled';
import { ItemStyled } from '../../styles/styled';
import { Elephant } from '../../utils/types';
import { useTranslation } from 'react-i18next';

export default function ElephantPreview(props: {
  clickedElephant: Elephant | undefined;
}) {
  const { t } = useTranslation();

  let { elephantId } = useParams<{ elephantId: string }>();
  return (
    <Aside>
      {elephantId}

      <ItemStyled>
        <div>
          <img alt="elephant" src="https://via.placeholder.com/150"></img>
        </div>
        <h2>{t('elephants.name')}Dumbo</h2>
        <h3>{t('elephants.age')}38</h3>
        <h3>{t('elephants.gender')}male</h3>
        <h3>{t('elephants.more')}more info</h3>
        <h3>{t('elephants.description')}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lobortis lacus in mauris finibus congue. Praesent libero erat, congue
          eu nulla at, feugiat cursus nisl.
        </p>
      </ItemStyled>
    </Aside>
  );
}
