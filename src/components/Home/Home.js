import React from "react";
import ContainerBody from "../Container/Container-Body/ContainerBody";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Cards from './Cards';
import SuspectList from './SuspectList';
import {getSuspects} from '../../helpers'
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    margin: "20px",
    padding: "10px"
  }
}));
const Home = props => {
  const classes = useStyles();
  console.log(getSuspects(props.loadTables.data))
  return (
      <Grid container>

        <Grid item xs={10}>
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3" align="left">
              Atividades Suspeitas
            </Typography>
            <SuspectList Style="MarginTop: 20px;" title={'Ida e volta no mesmo dia'} suspects={getSuspects(props.loadTables.data)}/>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="left"
          >
            <Cards entity={'Tickets'}>
              {props.loadTables.data? props.loadTables.data.Tickets.length : 0}
            </Cards>
            <Cards entity={'Passangers'}>
            {props.loadTables.data? props.loadTables.data.Passangers.length : 0}
            </Cards>
            <Cards entity={'Flights'}>
            {props.loadTables.data ? props.loadTables.data.Flights.length : 0}
            </Cards>
          </Grid>
        </Grid>
      </Grid>
  );
};
const mapStatetoProps = (state) => {
  return ({...state})
}
export default connect(mapStatetoProps)(Home);
