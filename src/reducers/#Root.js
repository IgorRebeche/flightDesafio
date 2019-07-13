import {combineReducers} from 'redux';
import {showTableFlights}  from '../reducers/FlightReducer';
import * as types from '../consts/Types'

export const toogleView = (state = [], action) => {
    var view;
    console.log('toogle view')
    switch(action.types){
        case types.TOOGLE_FLIGHTS:
        view = action.view;
        break;
        case types.TOOGLE_PASSANGERS:
        view = action.view;
        break;
        case types.TOOGLE_TICKETS:
        view = action.view;
        break;
        default:
        view = action.view;
    }
    
    
    return ({...state,
                view})
}

export default combineReducers({
    showTableFlights,
    toogleView
});