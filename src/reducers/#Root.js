import { combineReducers } from "redux";
import { showTableFlights } from "../reducers/FlightReducer";
import * as types from "../consts/Types";
import { showTablePassangers } from "./PassangerReducer";
import { showTableTickets } from "./TicketReducer";
import { formatDatesFlight } from "./../helpers";

export const loadTables = (state = [], action) => {
  var changedData = { ...state },
    viewData;
  console.log('Root Reducer', state, action)
  switch (action.type) {

    case types.LOAD_TABLE:
      let data = {...action.data};
      data.Flights = formatDatesFlight(data.Flights);
      
      return { ...state, data: data };

    case types.ADD_TABLE_ROW:
      changedData.data[action.view].push(action.newData);
      return { ...state, data: changedData.data };

    case types.UPDATE_TABLE_ROW:
      viewData = [changedData.data[action.view]];
      changedData.data[action.view][viewData.indexOf(action.oldData)] =
        action.newData;
      return {
        ...state,
        data: changedData.data
      };

    case types.DELETE_TABLE_ROW:
      viewData = [changedData.data[action.view]];
      changedData.data[action.view].splice(viewData.indexOf(action.oldData), 1);
      return {
        ...state,
        data: changedData.data
      };

    default:
      return state;
  }
};

export const toogleView = (state = [], action) => {
  var view;
  action.view ? view = action.view : view = types.views.Home;

  return { ...state, view };
};
export default combineReducers({
  showTableFlights,
  showTablePassangers,
  showTableTickets,
  toogleView,
  loadTables
});
