import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
// import { ItemStyled } from '../../styles/styled';
import { Elephant } from '../../utils/types';

//Material UI
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(5),
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }),
);

export default function ElephantItem(props: { data: Elephant }) {
  //Material UI
  const classes = useStyles();
  return (
    <Link to={`/preview/${props.data.id}`}>
      {/* <ItemStyled> */}

      <li>
        <Avatar
          className={classes.large}
          alt="elephant"
          src={props.data.img}
        ></Avatar>

        {/* <h2>{props.data.name}</h2> */}
      </li>
      {/* </ItemStyled> */}
    </Link>
  );
}
