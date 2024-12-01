import React, { useState } from 'react';
import './RegisterBooking.css';

function RegisterBooking() {
  const [spaceName, setSpaceName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking = {
      Users: spaceName, // Enviar o nome do espaço como "Users"
    };

    fetch('http://localhost:5071/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Reserva cadastrada com sucesso!');
          setSpaceName('');
        } else {
          setMessage('Falha ao cadastrar reserva.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="register-booking">
      <h2 className="title">Cadastrar Reserva</h2>
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

export default RegisterBooking;
