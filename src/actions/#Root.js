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
export const onNavItemClick = (navItem) => dispatch => {
    console.log('Clicando no NAV_Item' + navItem);
    switch(navItem){
        case 'Home':
         dispatch({
            type: types.TOOGLE_FLIGHTS,
            view: navItem
        });
        break;   
        case 'Flights':
            dispatch({
            type: types.TOOGLE_FLIGHTS,
            view: navItem
        });
        break;
        case 'Passangers':
        dispatch({
            type: types.TOOGLE_PASSANGERS,
            view: navItem
        });
        break;
        case 'Tickets':
        dispatch({
            type: types.TOOGLE_TICKETS,
            view: navItem
        });
        break;
        default:
            dispatch({
            type: types.TOOGLE_TICKETS,
            view: navItem
        });         
    }
    
}
