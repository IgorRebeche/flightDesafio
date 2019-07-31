import React, { useEffect } from "react";
import MaterialTable from "material-table";
import "./Table.css";
import { connect } from "react-redux";
import { onRowAdd, onRowUpdate, onRowDelete } from "./../../actions/#Root";
import { views } from "../../consts/Types";

const Table = props => {
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
  switch (state.toogleView.view) {
    case views.Flights:
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
export default connect(
  mapStateToProps,
  { onRowAdd, onRowUpdate, onRowDelete }
)(Table);
