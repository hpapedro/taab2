import React, { useState } from 'react';
import './UserSearch.css';

function UserSearch() {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [message, setMessage] = useState('');

  const handleSearch = () => {
    fetch(`http://localhost:5071/user/${userId}`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao encontrar usuário.');
        }
      })
      .then((data) => {
        setUserData(data);
        setMessage('Usuário Encontrado!');
      })
      .catch((error) => {
        setMessage(error.message);
        setUserData(null);
      });
  };

  return (
    <div className="search-user">
      <h2 className="title">Buscar Usuário</h2>
      <form className="form">
        <input
          type="text"
          placeholder="ID do Usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input"
        />
        <button type="button" onClick={handleSearch} className="button">Buscar</button>
      </form>
      {message && <p className="message">{message}</p>}
      {userData && (
        <div className="user-details">
          <p><strong>Nome:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Celular:</strong> {userData.cellphone}</p>
          <p><strong>CPF:</strong> {userData.taxNumber}</p>
          <p><strong>Criado Em:</strong> {new Date(userData.criadoEm).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
