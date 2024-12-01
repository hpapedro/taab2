import React from 'react';
import { Link } from 'react-router-dom';
import './SpacePage.css';

function SpacesPage() {
  return (
    <div className="spaces-page">
      <h1 className="title">Gerenciamento de Espaços</h1>
      <ul className="list">
        <li className="list-item">
          <Link to="/components/Spaces/RegisterSpace" className="link">Cadastrar Espaço</Link>
        </li>
        <li className="list-item">
          <Link to="/components/Spaces/SpaceList" className="link">Consultar Espaços</Link>
        </li>
        <li className="list-item">
          <Link to="/components/Spaces/EditSpace" className="link">Editar Espaço</Link>  
        </li>
        <li className="list-item">
          <Link to="/components/Spaces/DeleteSpace" className="link">Deletar Espaço</Link>
        </li>
      </ul>
    </div>
  );
}

export default SpacesPage;
