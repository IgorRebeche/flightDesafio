import * as types from "../consts/Types";

export const showTablePassangers = (state = [], action) => {
    console.log('Passanger Reducer', state, action)
  var showdata = { ...state};
  switch (action.type) {
    case types.LOAD_TABLE:
      let show = [...action.data.Passangers];
      //Tratar datas aqui para o Flight
      return { ...state, show: show };

    case types.CREATE_PASSANGERS:
      showdata.show.push(action.newData);
      return {
        ...state,
        show: showdata.show
      };
    case types.DELETE_PASSANGERS:
      //Update show
      showdata.show.splice(showdata.show.indexOf(action.oldData), 1);
      console.log('Deleting passanger',showdata)
      return {
        ...state,
        show: showdata.show
      };
    case types.UPDATE_PASSANGERS:
        //Updating Show
        showdata.show[
        showdata.show.indexOf(action.oldData)
      ] = action.newData;
      return {
        ...state,
        show: showdata.show
      };
    default:
      return state;
  }
};
