import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    minWidth: 10,
    margin: "10px",
    backgroundColor: deepPurple[500],
    color: "white"
  },
  bullet: {
    display: 'inline-block',
    margin: '10px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    color: "white"
  },
  pos: {
    marginBottom: 5,
  },
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Nº de {props.entity}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  );
}