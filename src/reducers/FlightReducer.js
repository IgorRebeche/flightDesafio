import * as types from "../consts/Types";

export const showTableFlights = (state = [], action) => {
  var showdata = [...state.show];

  switch (action.type) {
    case types.LOAD_TABLE:
      let show = action.data.Flights;
      //Tratar datas aqui para o Flight
      return { ...state, show: show };

    case types.CREATE_FLIGHT:
      //Updating show
      showdata.push(action.newData);
      return {
        ...state,
        show: showdata
      };

    case types.DELETE_FLIGHT:
      //Update show
      showdata.splice(showdata.indexOf(action.oldData), 1);
      return {
        ...state,
        show: showdata
      };
    case types.UPDATE_FLIGHT:
      //Updating Show
      showdata[
        showdata.indexOf(action.oldData)
      ] = formatDatesFlight(action.newData);
      return {
        ...state,
        show: showdata
      };
    default:
      return state;
  }
};


//Helpers para o flight
const formatDatesFlight = flightData => {
    var departureTime = new Date(flightData.departureTime);
    var arrivalTime = new Date(flightData.arrivalTime);
    flightData.arrivalTime = arrivalTime;
    flightData.departureTime = departureTime;
    return flightData;
  };