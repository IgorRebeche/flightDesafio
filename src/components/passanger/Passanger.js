import React from "react";
import ContainerBody from "../Container/Container-Body/ContainerBody";
import Table from './../table/Table';
import { CREATE_PASSANGERS, UPDATE_PASSANGERS, DELETE_PASSANGERS } from "../../consts/Types";
const tableConfig = {
  columns: [
    { title: "Nome", field: "nome" },
    { title: "Sobrenome", field: "sobrenome" },
    { title: "NationalID", field: "nationalID", type: "numeric" },
    {
      title: "Sexo",
      field: "sexo",
      lookup: { M: "Masculino", F: "Feminino" }
    }
  ]
};
const Passanger = () => {
  return (
    <ContainerBody>
      <Table name="Passanger" columns={tableConfig.columns} onRowAddType={CREATE_PASSANGERS} onRowUpdateType={UPDATE_PASSANGERS} onRowDeleteType={DELETE_PASSANGERS}/>
    </ContainerBody>
  );
};

export default Passanger;
