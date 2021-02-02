import React, { useState, useEffect } from 'react';
import elephant from '../../assets/elephant.png';
import { Link, useParams } from 'react-router-dom';
import { ItemStyled } from '../../styles/styled';
import { useTranslation } from 'react-i18next';
import { Elephant } from '../../utils/types';
import axios from 'axios';

export default function ElephantPreview() {
  //i18n
  const { t } = useTranslation();

  //slug
  let { eName } = useParams<{ eName: string }>();

  // console.log('eName: ', eName);

  const [elephantName, setElephantName] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<Elephant>();

  // console.log('elephantName: ', elephantName);
  // console.log('selectedItem: ', selectedItem);

  function getDataByName(): Promise<Elephant> {
    return axios
      .get(`https://elephant-api.herokuapp.com/elephants/name/${elephantName}`)
      .then((res) => {
        const elephant: Elephant = {
          id: res.data._id,
          name: res.data.name,
          species: res.data.species,
          img: res.data.image,
          gender: res.data.sex,
          dob: res.data.dob,
          dod: res.data.dod,
          more: res.data.wikilink,
          description: res.data.note,
        };
        return elephant;
      });
  }

  useEffect(() => {
    setElephantName(eName);
    getDataByName().then((res) => {
      setSelectedItem(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ItemStyled>
      <div></div>
      <Link to="/elephants">go back</Link>
      <div>
        <img
          alt="elephant"
          src={selectedItem?.img !== undefined ? selectedItem.img : elephant}
        ></img>
      </div>
      <h2>
        {t('elephants.name')}
        {selectedItem?.name !== undefined ? selectedItem.name : 'unknown'}
      </h2>
      <h3>
        {t('elephants.gender')}
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
