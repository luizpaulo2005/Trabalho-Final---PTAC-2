import React  from 'react';
import api from '../services/api';
import { Outlet } from 'react-router-dom';


function Nprincipal(){
    return(
      <div class="row border rounded-2 cardnoticia mt-3">
            <div class="col-4 p-0">
              Imagem
            </div>

            <div class="col-8">
              <div class="mt-4">
                <h2>Titulo</h2>
                <span>Texto Texto Texto TextoTexto Texto Texto Texto Texto Texto Texto TextoTexto</span>
              </div>
            </div>
          </div>
    )
}
export default Nprincipal;