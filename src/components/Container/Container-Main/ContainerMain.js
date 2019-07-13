import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {createFlight} from '../../../actions/#Root'
import Flight from '../../flight/Flight';
import Passanger from '../../passanger/Passanger';
import Ticket from '../../ticket/Ticket';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ContainerMain = (props, state) => {
  const classes = useStyles();
  //console.log('props ',props)
  return (
    <div>
      <Button onClick={() => props.createFlight()} variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      {props.view}
    </div>
  );
}
const mapStateToProps = state => {
  console.log("Mapstate retornado", state);
  
  return ({
    view: getView(state.toogleView.view)
  });
};
const getView = (view) => {
  console.log("View " + view)
  switch(view){
    case 'Home':
        return (
          <Flight/>
        )
    case 'Flights':
        return (
          <Flight/>
        )
    case 'Passangers':
        return (
          <Passanger/>
        )
    case 'Tickets':
        return (
          <Ticket/>
        )
    default:
      return (
        <Flight/>
      )
  }
}
export default connect(mapStateToProps, {createFlight})(ContainerMain)