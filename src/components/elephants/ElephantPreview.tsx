import React, { useState, useEffect } from 'react';
import elephant from '../../assets/elephant.png';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Elephant } from '../../utils/types';
import axios from 'axios';
import { Card, CardMedia, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PreviewContainer, CardText } from '../../styles/styled';

export default function ElephantPreview() {
  //i18n
  const { t } = useTranslation();

  //router slug
  let { eName } = useParams<{ eName: string }>();

  console.log('eName: ', eName);

  //states
  const [elephantName, setElephantName] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<Elephant>();

  console.log('elephantName: ', elephantName);
  console.log('selectedItem: ', selectedItem);

  function getDataByName(): Promise<Elephant> {
    return (
      axios
        .get(`https://elephant-api.herokuapp.com/elephants/name/mona`)
        // .get(
        //   `https://elephant-api.herokuapp.com/elephants/name/${elephantName}`,
        // )
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
        })
    );
  }

  useEffect(() => {
    setElephantName(eName);
    getDataByName().then((res) => {
      setSelectedItem(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
      backgroundColor: '#fafafa',
    },
    media: {
      height: 300,
    },
  });
  const classes = useStyles();
  return (
    <PreviewContainer>
      <Card className={classes.card}>
        <CardActions>
          <Button size="small" color="secondary" variant="contained">
            <Link to="/elephants">go back</Link>
          </Button>
        </CardActions>

        <CardMedia
          component="img"
          className={classes.media}
          image={selectedItem?.img !== undefined ? selectedItem.img : elephant}
          title={
            selectedItem?.name !== undefined ? selectedItem.name : 'unknown'
          }
        />
        <CardText>
          <h2>
            <strong>{t('elephants.name')}</strong>
            {selectedItem?.name !== undefined ? selectedItem.name : 'unknown'}
          </h2>
          <p>
            <strong>{t('elephants.gender')}</strong>
            {selectedItem?.gender !== undefined
              ? selectedItem.gender
              : 'unknown'}
          </p>
          <p>
            <strong>{t('elephants.description')}</strong>
            {selectedItem?.description !== undefined
              ? selectedItem.description
              : 'unknown'}
          </p>
          <a href={selectedItem?.more} target="_blank" rel="noreferrer">
            more
          </a>
        </CardText>
      </Card>
    </PreviewContainer>
  );
}
