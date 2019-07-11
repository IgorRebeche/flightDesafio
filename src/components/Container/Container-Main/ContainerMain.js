import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {createFlight} from '../../../actions/#Root'
import Flight from '../../flight/Flight';
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ContainerMain = (props) => {
  const classes = useStyles();
  console.log('props ',props)
  return (
    <div>
      <Button onClick={() => props.createFlight()} variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Flight/>
    </div>
  );
}
const mapStateToProps = state => {
  console.log("Mapstate retornado", state);
  return state;
};

export default connect(mapStateToProps, {createFlight})(ContainerMain)