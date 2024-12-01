import React, { useState, useEffect } from 'react';
import './EditSpace.css';

function EditSpace() {
  const [spaceId, setSpaceId] = useState('');
  const [spaceName, setSpaceName] = useState('');
  const [message, setMessage] = useState('');
  const [spaceFound, setSpaceFound] = useState(false);

  const handleSearch = () => {
    fetch(`http://localhost:5071/spaces/${spaceId}`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao encontrar o espaço.');
        }
      })
      .then((data) => {
        setSpaceName(data.name);
        setSpaceFound(true);
        setMessage('');
      })
      .catch((error) => {
        setMessage(error.message);
        setSpaceFound(false);
      });
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedSpace = { name: spaceName };

    fetch(`http://localhost:5071/spaces/${spaceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSpace),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Espaço atualizado com sucesso!');
          setSpaceFound(false);
        } else {
          setMessage('Falha ao atualizar espaço.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="edit-space">
      <h2 className="title">Editar Espaço</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="spaceId">ID do Espaço</label>
          <input
            type="text"
            id="spaceId"
            value={spaceId}
            onChange={(e) => setSpaceId(e.target.value)}
            className="input"
          />
          <button type="button" onClick={handleSearch} className="button">Buscar</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
      {spaceFound && (
        <form className="form" onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="spaceName">Nome do Espaço</label>
            <input
              type="text"
              id="spaceName"
              value={spaceName}
              onChange={(e) => setSpaceName(e.target.value)}
              required
              className="input"
            />
          </div>
          <button type="submit" className="button">Atualizar</button>
        </form>
      )}
    </div>
  );
}

export default EditSpace;
