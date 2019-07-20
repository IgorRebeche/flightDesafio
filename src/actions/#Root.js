import * as types from "../consts/Types";
import { MainProps } from "../configuration";
import axios from "axios";

export const createFlight = () => dispatch => {
  dispatch({
    type: types.CREATE_FLIGHT
  });
};

const getTableHandle = response => {
  return {
    type: types.LOAD_TABLE,
    data: response
  };
};
const getTableErrorHandle = () => {
  return {
    type: types.LOAD_TABLE_ERROR
  };
};

export const init = () => dispatch => {
  axios
    .all([
      axios.get(MainProps.apiConfig.PASSANGERS_API),
      axios.get(MainProps.apiConfig.FLIGHT_API),
      axios.get(MainProps.apiConfig.TICKET_API)
    ])
    .then(
      axios.spread((PassangerRes, FlightRes, TicketsRes) => {
        //Keys precisam corresponder as views
        var responses = {
          Passangers: PassangerRes.data,
          Flights: FlightRes.data,
          Tickets: TicketsRes.data
        };
        dispatch(getTableHandle(responses));
      })
    )
    .catch(error => {
      console.log("Algo errado ocorreu no request " + error);
      dispatch(getTableErrorHandle(error));
    });
};

export const toogleFlight = () => dispatch => {
  console.log("Mudando para FlightView");
  dispatch({
    type: types.TOOGLE_FLIGHTS
  });
};
export const onNavItemClick = navItem => dispatch => {
  console.log("Clicando no NAV_Item" + navItem);
  dispatch({
    type: types.TOGGLE_VIEW,
    view: navItem
  });
};

export const onRowAdd = (newData, type, resolve, state) => {
  console.log("Antes do resolve ADD ", type, state);
  var endpoint;
  return dispatch => {
    switch (type) {
      case types.CREATE_FLIGHT:
        endpoint = MainProps.apiConfig.FLIGHT_API;
        break;
      case types.CREATE_PASSANGERS:
        endpoint = MainProps.apiConfig.PASSANGERS_API;
        break;
      case types.CREATE_TICKET:
        endpoint = MainProps.apiConfig.TICKET_API;
        //SIMULAR O SELECT REALIZADO EM UM BANCO
        //Juntar informações do passageiro com o flight e completar os campos
        newData = mergeDataTicket(newData, state);
        break;
      default:
        console.log(
          "tipo errado para esta funcao, use somente na criacao de dados"
        );
    }
    axios
      .post(endpoint, newData)
      .then(function(response) {
        resolve();
        newData.id = response.data.id;

        Promise.resolve(dispatch({
          type: types.ADD_TABLE_ROW,
          newData: newData,
          view: state.toogleView.view
        })).then(()=>{
            dispatch({
            type: type,
            newData: newData,
            view: state.toogleView.view
          });
        })

        
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

export const onRowUpdate = (oldData, newData, type, resolve, view) => {
  console.log("Antes do resolve", type, newData);
  var endpoint;
  return dispatch => {
    switch (type) {
      case types.UPDATE_FLIGHT:
        endpoint = MainProps.apiConfig.FLIGHT_API;
        break;
      case types.UPDATE_TICKET:
        endpoint = MainProps.apiConfig.TICKET_API;
        break;
      case types.UPDATE_PASSANGERS:
        endpoint = MainProps.apiConfig.PASSANGERS_API;
        break;
      default:
        console.log(
          "tipo errado para esta funcao, use somente na criacao de dados"
        );
    }
    axios
      .put(endpoint + `/${newData.id}`, newData)
      .then(function(response) {
        resolve();
        dispatch({
          type: types.UPDATE_TABLE_ROW,
          newData: newData,
          oldData: oldData,
          view: view
        });
        dispatch({
          type: type,
          newData: newData,
          oldData: oldData,
          view: view
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

export const onRowDelete = (oldData, type, resolve, view) => {
  console.log("Antes do resolve", type, oldData.id, oldData.tableData.id);
  var endpoint;

  return dispatch => {
    switch (type) {
      case types.DELETE_FLIGHT:
        endpoint = MainProps.apiConfig.FLIGHT_API;
        break;
      case types.DELETE_PASSANGERS:
        endpoint = MainProps.apiConfig.PASSANGERS_API;
        break;
      case types.DELETE_TICKET:
        endpoint = MainProps.apiConfig.TICKET_API;
        break;
      default:
        console.log(
          "tipo errado para esta funcao, use somente na criacao de dados"
        );
    }
    axios
      .delete(endpoint + `/${oldData.id}`)
      .then(function(response) {
        resolve();
        oldData.id = response.data.id;

        dispatch({
          type: types.DELETE_TABLE_ROW,
          oldData: oldData,
          view: view
        });

        dispatch({
          type: type,
          oldData: oldData,
          view: view
        });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

const mergeDataTicket = (newData, state) => {
  console.log(newData);
  let data = state.loadTables.data;
  //Percorrer passanger e extrair id e nome
  data.Passangers.every(p => {
    if (p.nome === newData.passanger_name) {
      newData.passanger_id = p.nationalID;
      return false;
    }
    return true;
  });

  data.Flights.every(f => {
    if (f.flight_id === newData.flight_id) {
      newData.flight_destino = f.flight_destino;
      newData.flight_date = f.flight_date;
      return false;
    }
    return true;
  });
  return newData;
};
