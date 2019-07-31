import React from 'react';
import {connect} from 'react-redux'
import {createFlight} from '../../../actions/#Root'
import Flight from '../../flight/Flight';
import Passanger from '../../passanger/Passanger';
import Ticket from '../../ticket/Ticket';
import Home from '../../Home/Home';

const viewsCmp = {
  Home: Home,
  Flights: Flight,
  Passangers: Passanger,
  Tickets: Ticket
}

const ContainerMain = (props, state) => {
  return (
    <div>
      {props.view}
    </div>
  );
}
const mapStateToProps = state => {
  //console.log("Mapstate retornado", state);
  
  return ({
    view: getView(state.toogleView.view)
  });
};
const getView = (view) => {
  var Cmp = viewsCmp[view];
        return <Cmp/>
}
export default connect(mapStateToProps, {createFlight})(ContainerMain)