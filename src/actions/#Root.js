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
    dispatch({
        type: types.TOGGLE_VIEW,
        view: navItem
    });
    // switch(navItem){
    //     case 'Home':
    //      dispatch({
    //         type: types.TOGGLE_VIEW,
    //         view: navItem
    //     });
    //     break;   
    //     case 'Flights':
    //         dispatch({
    //         type: types.TOGGLE_VIEW,
    //         view: navItem
    //     });
    //     break;
    //     case 'Passangers':
    //     dispatch({
    //         type: types.TOGGLE_VIEW,
    //         view: navItem
    //     });
    //     break;
    //     case 'Tickets':
    //     dispatch({
    //         type: types.TOGGLE_VIEW,
    //         view: navItem
    //     });
    //     break;
    //     default:
    //         dispatch({
    //         type: types.TOGGLE_VIEW,
    //         view: navItem
    //     });         
    // }
    
}
