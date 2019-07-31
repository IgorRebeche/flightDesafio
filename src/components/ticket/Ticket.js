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

function lookup(data) {
  var options = {
    lookupFlight: [],
    lookupPassanger: []
  };
  data.Flights.forEach(Flight => {
    let opt = [
      {
        value: Flight.id,
        label: Flight.id
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
  return options;
}

const Ticket = ({ loadTables }) => {
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
      { title: "Departure", field: "flight_departure", type: "datetime", editable: 'never'},
      { title: "Arrival", field: "flight_arrival", type: "datetime", editable: 'never'},
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
