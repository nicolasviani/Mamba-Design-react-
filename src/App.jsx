import React from 'react';
import NavBar from './assets/components/NavBar';
import ItemListContainer from './assets/components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"Bienvenidos a Mamba Design, ingresa tu e-mail para continuar"}/>
    </div>
  );
}

export default App;

