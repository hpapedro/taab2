import React, { useState } from 'react';
import './DeleteUser.css';

function DeleteUser() {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    fetch(`http://localhost:5071/user/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Usuário excluído com sucesso!');
          setUserId('');
        } else {
          setMessage('Falha ao excluir usuário.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="delete-user">
      <h2 className="title">Excluir Usuário</h2>
      <form className="form">
        <input
          type="text"
          placeholder="ID do Usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input"
        />
        <button type="button" onClick={handleDelete} className="button">Excluir</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default DeleteUser;
