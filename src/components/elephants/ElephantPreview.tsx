import React from 'react';
import elephant from '../../assets/elephant.png';
import { Link, useParams } from 'react-router-dom';
import { ItemStyled } from '../../styles/styled';
import { Elephant } from '../../utils/types';
import { useTranslation } from 'react-i18next';

export default function ElephantPreview(props: { elephants: Elephant[] }) {
  //i18n
  const { t } = useTranslation();

  //slug
  let { elephantId } = useParams<{ elephantId: string }>();

  const selectedItem: Elephant | undefined = props.elephants.find((item) => {
    return item.id === elephantId;
  });

  return (
    <ItemStyled>
      <Link to="/elephants">go back</Link>
      <div>
        <img
          alt="elephant"
          src={selectedItem?.img !== undefined ? selectedItem.img : elephant}
        ></img>
      </div>
      <h2>
        {t('elephants.name')}{' '}
        {selectedItem?.name !== undefined ? selectedItem.name : 'unknown'}
      </h2>
      <h3>
        {t('elephants.gender')}{' '}
        {selectedItem?.gender !== undefined ? selectedItem.gender : 'unknown'}
      </h3>
      <h3>{t('elephants.description')}</h3>
      <p>
        {selectedItem?.description !== undefined
          ? selectedItem.description
          : 'unknown'}
      </p>
    </ItemStyled>
  );
}

// | undefined
