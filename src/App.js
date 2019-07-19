import React from "react";
import "./App.css";
import ContainerMain from "./components/Container/Container-Main/ContainerMain";
import ContainerNavigation from "./components/Container/ContainerNavigation/ContainerNavigation";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <ContainerNavigation />
    </div>
  );
}

export default App;
