import React from "react";
import ContainerBody from "./../Container/Container-Body/ContainerBody";
import Table from "./../table/Table";
import { CREATE_FLIGHT, DELETE_FLIGHT, UPDATE_FLIGHT } from "../../consts/Types";

const tableConfig = {
  columns: [
    { title: "Origin", field: "origin" },
    { title: "Destination", field: "flight_destino", type: "numeric" },
    { title: "DepartureTime", field: "flight_date", type: "date" },
    { title: "ArrivalTime", field: "arrivalTime", type: "date" }
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
