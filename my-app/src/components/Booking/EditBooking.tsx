import React, { useState, useEffect } from 'react';
import './EditBooking.css';

function EditBooking() {
  const [bookingId, setBookingId] = useState('');
  const [userId, setUserId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const [bookingFound, setBookingFound] = useState(false);

  const handleSearch = () => {
    fetch(`http://localhost:5071/booking/${bookingId}`, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao encontrar a reserva.');
        }
      })
      .then((data) => {
        setUserId(data.userId);
        setStartDate(new Date(data.startDate).toISOString().substring(0, 10));
        setEndDate(new Date(data.endDate).toISOString().substring(0, 10));
        setBookingFound(true);
        setMessage('');
      })
      .catch((error) => {
        setMessage(error.message);
        setBookingFound(false);
      });
  };

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBooking = {
      userId,
      startDate: new Date(startDate).toISOString(),
      endDate: new Date(endDate).toISOString(),
    };

    fetch(`http://localhost:5071/booking/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Reserva atualizada com sucesso!');
          setBookingFound(false);
        } else {
          setMessage('Falha ao atualizar reserva.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="edit-booking">
      <h2 className="title">Editar Reserva</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="bookingId">ID da Reserva</label>
          <input
            type="text"
            id="bookingId"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            className="input"
          />
          <button type="button" onClick={handleSearch} className="button">Buscar</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
      {bookingFound && (
        <form className="form" onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="userId">ID do Usuário</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Data de Início</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">Data de Fim</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
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

export default EditBooking;
