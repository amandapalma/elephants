import { Avatar, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link className="item" to={`/preview/${props.data.name}`}>
      <Avatar
        className={classes.large}
        alt="elephant"
        src={props.data.img}
      ></Avatar>
    </Link>
  );
}
