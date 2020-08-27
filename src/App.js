/*******/
/* Creacion del componente App
/* importanto los dos componentes de la página
/** */
import React from 'react';
import SideA from './Components/SideA/SideA'
import SideB from './Components/SideB/SideB'
import './App.sass';

function App() {
  return (
    <div className="App">
      <SideA></SideA>
      <SideB></SideB>
    </div>
  );
}

export default App;
