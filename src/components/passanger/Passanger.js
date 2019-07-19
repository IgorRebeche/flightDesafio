import React from "react";
import ContainerBody from "../Container/Container-Body/ContainerBody";
import Table from './../table/Table';
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
      <Table name="Passanger" columns={tableConfig.columns}/>
    </ContainerBody>
  );
};

export default Passanger;
