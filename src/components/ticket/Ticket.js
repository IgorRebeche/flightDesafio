import React from "react";
import ContainerBody from "../Container/Container-Body/ContainerBody";
import Table from "./../table/Table";
import {
  CREATE_TICKET,
  DELETE_TICKET,
  UPDATE_TICKET
} from "../../consts/Types";
import Select from "react-select";
import { connect } from "react-redux";
import { loadTables } from "./../../reducers/#Root";

function lookup(data) {
  var options = {
    lookupFlight: [],
    lookupPassanger: []
  };
  data.Flights.forEach(Flight => {
    let opt = [
      {
        value: Flight.flight_id,
        label: Flight.flight_id
      }
    ];

    options.lookupFlight.push(opt[0]);
  });

  data.Passangers.forEach(passanger => {
    let opt = [
      {
        value: passanger.nome,
        label: passanger.nome
      }
    ];
    options.lookupPassanger.push(opt[0]);
  });
  console.log(options);
  return options;
}
//lookup(loadTables.data.Passangers)
const Ticket = ({ loadTables }) => {
  /* Simple example */
  var lookupdata = lookup(loadTables.data);
  const tableConfig = {
    columns: [
      {
        title: "Passanger",
        field: "passanger_name",
        editComponent: props => (
          <Select
            options={lookupdata.lookupPassanger}
            onChange={e => props.onChange(e.value)}
          />
        )
      },
      { title: "Passanger ID", field: "passanger_id", editable: 'never'},
      { title: "Destination", field: "flight_destino", editable: 'never' },
      { title: "Date", field: "flight_date", type: "date", editable: 'never'},
      { title: "Seat", field: "flight_seat", type: "numeric" },
      {
        title: "Flight ID",
        field: "flight_id",
        editComponent: props => (
          <Select
            options={lookupdata.lookupFlight}
            onChange={e => props.onChange(e.value)}
          />
        )
      }
    ],
    options: {
      actionsColumnIndex: -1
    }
  };

  return (
    <ContainerBody>
      <Table
        name="Ticket"
        options={tableConfig.options}
        columns={tableConfig.columns}
        onRowAddType={CREATE_TICKET}
        onRowUpdateType={UPDATE_TICKET}
        onRowDeleteType={DELETE_TICKET}
      />
    </ContainerBody>
  );
};

const mapStatetoProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStatetoProps,
  {}
)(Ticket);
