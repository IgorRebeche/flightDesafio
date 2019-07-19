import * as types from "../consts/Types";

export const showTablePassangers = (state = [], action) => {
  var changedData;
  switch (action.type) {
    case types.LOAD_TABLE:
      changedData = action.data.Passangers;
      //Tratar datas aqui para o Flight
      return { ...state, show: changedData };
    case types.CREATE_PASSANGERS:
      console.log("Criando Flight", action.newData);
      return { ...state };
    case types.DELETE_PASSANGERS:
      return state;
    case types.UPDATE_PASSANGERS:
      return state;
    default:
      return state;
  }
};