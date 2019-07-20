import * as types from "../consts/Types";
import { formatDatesTicket } from './../helpers';

export const showTableTickets = (state = [], action) => {
  var showdata = {...state};
  switch (action.type) {
    case types.LOAD_TABLE:
      let show = formatDatesTicket([...action.data.Tickets]);
      //let show = [...action.data.Tickets];
      //Tratar datas aqui para o Flight
      return { ...state, show: show };

    case types.CREATE_TICKET:
      showdata.show.push(action.newData);
      return {
        ...state,
        show: showdata.show
      };

    case types.DELETE_TICKET:
       showdata.show.splice(showdata.show.indexOf(action.oldData), 1);
       return {
        ...state,
        show: showdata.show
      };

    case types.UPDATE_TICKET:
      //Updating ShowData
      showdata.show[
        showdata.show.indexOf(action.oldData)
      ] = action.newData;
      return {
        ...state,
        show: showdata.show
      };
    default:
      return state;
  }
};

const formatDatesRowTicket = flightData => {
    var departureTime = new Date(flightData.departureTime);
    var arrivalTime = new Date(flightData.arrivalTime);
    flightData.arrivalTime = arrivalTime;
    flightData.departureTime = departureTime;
    return flightData;
  };
