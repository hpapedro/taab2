import React from 'react';
import { Link } from 'react-router-dom';
import './UsersPage.css';

function UsersPage() {
  return (
    <div className="users-page">
      <h1 className="title">Gerenciamento de Usuários</h1>
      <ul className="list">
        <li className="list-item">
          <Link to="/components/Usuários/RegisterUser" className="link">Cadastrar Usuários</Link>
        </li>
        <li className="list-item">
          <Link to="/components/Usuários/UserList" className="link">Consultar Usuários</Link>
        </li>
        <li className="list-item">
          <Link to="/components/Usuários/EditUser" className="link">Editar Usuários</Link>  
        </li>
        <li className="list-item">
          <Link to="/components/Usuários/UserSearch" className="link">Buscar Usuários</Link>
        </li>
        <li className="list-item">
          <Link to="/components/Usuários/DeletUser" className="link">Deletar Usuários</Link>
        </li>
      </ul>
    </div>
  );
}

export default UsersPage;
