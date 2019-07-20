import * as types from "../consts/Types";
import { formatDatesFlight } from './../helpers';

export const showTableFlights = (state = [], action) => {
    var showdata = {...state};

  switch (action.type) {
    case types.LOAD_TABLE:
      let show = formatDatesFlight([...action.data.Flights]);
      //Tratar datas aqui para o Flight
      return { ...state, show: show };

    case types.CREATE_FLIGHT:
      //Updating show
      showdata.show.push(action.newData);
      return {
        ...state,
        show: showdata.show
      };

    case types.DELETE_FLIGHT:
      //Update show
      showdata.show.splice(showdata.show.indexOf(action.oldData), 1);
      return {
        ...state,
        show: showdata.show
      };
    case types.UPDATE_FLIGHT:
      //Updating Show
      showdata.show[showdata.show.indexOf(action.oldData)] = formatDatesRowFlight(action.newData);
      return {
        ...state,
        show: showdata.show
      };
    default:
      return state;
  }
};


//Helpers para o flight
const formatDatesRowFlight = flightData => {
    var departureTime = new Date(flightData.departureTime);
    var arrivalTime = new Date(flightData.arrivalTime);
    flightData.arrivalTime = arrivalTime;
    flightData.departureTime = departureTime;
    return flightData;
  };