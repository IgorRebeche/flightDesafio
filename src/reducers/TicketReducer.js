import * as types from "../consts/Types";

export const showTableTickets = (state = [], action) => {
  var changedData;
  switch (action.type) {
    case types.LOAD_TABLE:
      changedData = action.data.Tickets;
      //Tratar datas aqui para o Flight
      return { ...state, show: changedData };
    case types.CREATE_TICKET:
      console.log("Criando Flight", action.newData);
      return { ...state };
    case types.DELETE_TICKET:
      return state;
    case types.UPDATE_TICKET:
      return state;
    default:
      return state;
  }
};