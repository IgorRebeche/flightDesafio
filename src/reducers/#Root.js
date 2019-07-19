import { combineReducers } from "redux";
import { showTableFlights } from "../reducers/FlightReducer";
import * as types from "../consts/Types";
import { ADD_TABLE_ROW } from "./../consts/Types";
import { showTablePassangers } from './PassangerReducer';
import { showTableTickets } from './TicketReducer';

export const loadTables = (state = [], action) => {
  console.log("Stado Atual:", state);
  console.log("Acao recebida", action);
  var changedData, flightData, showdata;

  switch (action.type) {
    case types.LOAD_TABLE:
      changedData = formatDates(action.data);
      console.log(changedData);
      //Tratar datas aqui para o Flight
      return { ...state, data: changedData };

    case types.TOGGLE_VIEW:
      return state;

    case types.ADD_TABLE_ROW:
      changedData = { ...state };
      switch (action.update_viewType) {
        case types.CREATE_FLIGHT:
          //Tem como refatorar: Colocar tudo em uma variavel
          //Updating showData
          showdata = [...state.showData];
          showdata.push(action.newData);

          //Updating data
          changedData = { ...state.data };
          changedData[action.view].push(action.newData);
          return {
            ...state,
            showData: showdata,
            data: changedData
          };

        case types.CREATE_PASSANGERS:
          break;

        case types.CREATE_TICKET:
          showdata = [...state.showData];
          showdata.push(action.newData);

          //Updating data
          changedData = { ...state.data };
          changedData[action.view].push(action.newData);
          return {
            ...state,
            showData: showdata,
            data: changedData
          };
        default:
      }
      break;

    case types.UPDATE_TABLE_ROW:
      changedData = { ...state };
      switch (action.update_viewType) {
        case types.UPDATE_FLIGHT:
          //Updating ShowData
          changedData.showData[
            changedData.showData.indexOf(action.oldData)
          ] = formatDatesFlight(action.newData);
          //Updating data
          flightData = [changedData.data[action.view]];
          changedData.data[action.view][flightData.indexOf(action.oldData)] =
            action.newData;
          return {
            ...state,
            showData: changedData.showData,
            data: changedData.data
          };

        case types.UPDATE_PASSANGERS:
          break;
        case types.UPDATE_TICKET:
          console.log("Data antes", changedData);

          //Updating ShowData
          changedData.showData[changedData.showData.indexOf(action.oldData)] =
            action.newData;
          //Updating data
          flightData = [changedData.data[action.view]];
          changedData.data[action.view][flightData.indexOf(action.oldData)] =
            action.newData;
          return {
            ...state,
            showData: changedData.showData,
            data: changedData.data
          };
        default:
      }
      break;

    case types.DELETE_TABLE_ROW:
      changedData = { ...state };
      switch (action.update_viewType) {
        case types.DELETE_FLIGHT:
          //Update showData
          showdata = changedData.showData;
          showdata.splice(showdata.indexOf(action.oldData), 1);
          //Update data
          flightData = [changedData.data[action.view]];
          changedData.data[action.view].splice(
            flightData.indexOf(action.oldData),
            1
          );
          // data.splice(data.indexOf(oldData), 1);
          // setState({ ...state, data});
          return {
            ...state,
            showData: showdata,
            data: changedData.data
          };
        case types.DELETE_PASSANGERS:


        
          break;
        case types.DELETE_TICKET:
            console.log(changedData)
          //Update showData
          showdata = changedData.showData;
          showdata.splice(showdata.indexOf(action.oldData), 1);
          //Update data
          flightData = [changedData.data[action.view]];
          changedData.data[action.view].splice(
            flightData.indexOf(action.oldData),
            1
          );
          
          return {
            ...state,
            showData: showdata,
            data: changedData.data
          };
        default:
      }
      break;

    default:
      return state;
  }
};

export const toogleView = (state = [], action) => {
  var view;
  console.log("toogle view state", state, "\ntoogle view action ", action);
  switch (action.type) {
    case types.TOGGLE_VIEW:
      view = action.view;
      break;
    case ADD_TABLE_ROW:
      view = action.view;
      break;
    case types.UPDATE_TABLE_ROW:
      view = action.view;
      break;
    case types.DELETE_TABLE_ROW:
      view = action.view;
      break;
    default:
      view = types.views.Home;
  }

  return { ...state, view };
};
const formatDates = jsonArray => {
  jsonArray.Flights.forEach(flight => {
    var departureTime = new Date(flight.departureTime);
    var arrivalTime = new Date(flight.arrivalTime);
    flight.arrivalTime = arrivalTime;
    flight.departureTime = departureTime;
  });
  return jsonArray;
};
const formatDatesFlight = flightData => {
  var departureTime = new Date(flightData.departureTime);
  var arrivalTime = new Date(flightData.arrivalTime);
  flightData.arrivalTime = arrivalTime;
  flightData.departureTime = departureTime;
  return flightData;
};

export default combineReducers({
  showTableFlights,
  showTablePassangers,
  showTableTickets,
  toogleView,
  loadTables
});
