import { CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT } from "../consts/Types";

export const showTableFlights = (state = [], action) => {
    console.log(action);
  switch (action.type) {
    case CREATE_FLIGHT:
        console.log('Criando Flight');
        return state;
    case DELETE_FLIGHT:
        return state;
    case UPDATE_FLIGHT:
        return state;
    default:
        return state;
  }
};
