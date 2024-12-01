import React, { useState } from 'react';
import './DeleteBooking.css';

function DeleteBooking() {
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    fetch(`http://localhost:5071/booking/${bookingId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Reserva excluída com sucesso!');
          setBookingId('');
        } else {
          setMessage('Falha ao excluir reserva.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="delete-booking">
      <h2 className="title">Deletar Reserva</h2>
      <form className="form">
        <input
          type="text"
          placeholder="ID da Reserva"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          className="input"
        />
        <button type="button" onClick={handleDelete} className="button">Deletar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default DeleteBooking;
