import {combineReducers} from 'redux';
import {showTableFlights}  from '../reducers/FlightReducer';
import {views} from '../consts/Types'

export const toogleView = (state = [], action) => {
    var view;
    console.log('toogle view')
    switch(action.view){
        case views.Home:
        view = action.view;
        break;
        case views.Flights:
        view = action.view;
        break;
        case views.PASSANGERS:
        view = action.view;
        break;
        case views.Tickets:
        view = action.view;
        break;
        default:
        view = views.Home;
    }
    
    
    return ({...state,
                view})
}

export default combineReducers({
    showTableFlights,
    toogleView
});