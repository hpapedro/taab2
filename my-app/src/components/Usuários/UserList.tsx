import { useEffect, useState } from 'react';
import { User } from '../../Models/User';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Função para buscar os usuários
    fetchUsers();
  }, []);

  // Função para buscar os usuários da API
  function fetchUsers() {
    fetch("http://localhost:5071/user")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }

  return (
    <div className="users-list">
      <h2 className="title">Lista de Usuários</h2>
      <table className="table" cellPadding="10">
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Celular</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {users.map((user) => (
            <tr key={user.id} className="row">
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cellphone}</td>
              <td>{user.taxNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
