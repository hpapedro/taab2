import React, { useState } from 'react';
import './DeleteSpace.css';

function DeleteSpace() {
  const [spaceId, setSpaceId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    fetch(`http://localhost:5071/spaces/${spaceId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Espaço excluído com sucesso!');
          setSpaceId('');
        } else {
          setMessage('Falha ao excluir espaço.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="delete-space">
      <h2 className="title">Deletar Espaço</h2>
      <form className="form">
        <input
          type="text"
          placeholder="ID do Espaço"
          value={spaceId}
          onChange={(e) => setSpaceId(e.target.value)}
          className="input"
        />
        <button type="button" onClick={handleDelete} className="button">Deletar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default DeleteSpace;
