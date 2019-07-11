import * as types from '../consts/Types';

export const createFlight = () => dispatch => {
    dispatch({
        type: types.CREATE_FLIGHT 
    })
}

export const init = () => dispatch => {
    dispatch({
        type: 'QUALQUER_MERDA' 
    })
}

export const toogleFlight = () => dispatch => {
    console.log('Mudando para FlightView');
    dispatch({
        type: types.TOOGLE_FLIGHTS
    })
}