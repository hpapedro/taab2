import React, { useState } from 'react';
import './RegisterSpace.css';

function RegisterSpace() {
  const [spaceName, setSpaceName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newSpace = { name: spaceName };

    fetch('http://localhost:5071/spaces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSpace),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Espaço cadastrado com sucesso!');
          setSpaceName('');
        } else {
          setMessage('Falha ao cadastrar espaço.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="register-space">
      <h2 className="title">Cadastrar Espaço</h2>
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit" className="button">Cadastrar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default RegisterSpace;
