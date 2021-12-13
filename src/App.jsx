import React from 'react';
import './App.css';
import api from './arquivos/services/api';
import Cabecalho from './arquivos/componentes/cabecalho';
import Nprincipal from './arquivos/componentes/nprincipal';
import Nprincipal1 from './arquivos/componentes/nprincipal1';

function App() {
  return (
    <div class="container">
    <Cabecalho/>
    <div class="container mt-3">
    <Nprincipal/>
    <Nprincipal1/>
    <Nprincipal1/>
    <Nprincipal1/>
    </div>
    </div>
  );
}

export default App;