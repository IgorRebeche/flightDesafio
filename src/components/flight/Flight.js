import React from "react";
import ContainerBody from "./../Container/Container-Body/ContainerBody";
import Table from "./../table/Table";
import { CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT } from "../../consts/Types";

const tableConfig = {
  columns: [
    { title: "Origin", field: "origin" },
    { title: "Destination", field: "flight_destino" },
    { title: "DepartureTime", field: "flight_departure", type: "datetime" },
    { title: "ArrivalTime", field: "flight_arrival", type: "datetime" }
  ]
};

const Flight = () => {
  return (
    <div>
      <ContainerBody>
        <Table name="Flight" columns={tableConfig.columns} onRowAddType={CREATE_FLIGHT} onRowUpdateType={UPDATE_FLIGHT} onRowDeleteType={DELETE_FLIGHT}/>
      </ContainerBody>
    </div>
  );
};

export default (Flight);
