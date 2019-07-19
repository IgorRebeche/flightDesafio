import React, { useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import "./Table.css";
import { MainProps } from "./../../configuration";
import { connect } from "react-redux";
import { onRowAdd, onRowUpdate, onRowDelete } from "./../../actions/#Root";
import { views } from "../../consts/Types";

const fetchData = async (setState, state) => {
  const result = await axios(MainProps.apiConfig.PASSANGERS_API);
  console.log("OPAAA response ", result.data);
  var data = result.data;
  setState({ ...state, data });
  console.log("OPAAA ", state);
};

const Table = props => {
  console.log("cu", props);
  useEffect(() => {
    //fetchData(setState, state);
  }, []);
  return (
    <div className="table">
      <MaterialTable
        title={props.name}
        options={
          props.options
            ? props.options
            : {
                actionsColumnIndex: -1
              }
        }
        columns={props.columns}
        data={props.data}
        editable={{
          onRowAdd: newData => {
            return new Promise(resolve => {
              props.onRowAdd(newData, props.onRowAddType, resolve, props);
            });
          },
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              props.onRowUpdate(
                oldData,
                newData,
                props.onRowUpdateType,
                resolve,
                props.toogleView.view
              );
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              props.onRowDelete(
                oldData,
                props.onRowDeleteType,
                resolve,
                props.toogleView.view
              );
            })
        }}
      />
    </div>
  );
};
const mapStateToProps = state => {
  console.log("Tables State ", state.toogleView.view);
  switch (state.toogleView.view) {
    case views.Flights:
      console.log("mostrando flights", state.showTableFlights.show);
      return {
        ...state,
        data: state.showTableFlights.show
      };
    case views.PASSANGERS:
      return {
        ...state,
        data: state.showTablePassangers.show
      };
    case views.Tickets:
      return {
        ...state,
        data: state.showTableTickets.show
      };
    default:
  }
};

//console.log('OPAAA ' , getData(MainProps.apiConfig.PASSANGERS_API));
export default connect(
  mapStateToProps,
  { onRowAdd, onRowUpdate, onRowDelete }
)(Table);
