import React, { useState, useEffect } from 'react';
import './ListBookings.css';

function ListBookings() {
  const [bookings, setBookings] = useState<any[]>([]); // Lista de reservas
  const [message, setMessage] = useState('');

  // Função para buscar as reservas
  const fetchBookings = () => {
    fetch('http://localhost:5071/bookings', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao buscar reservas.');
        }
      })
      .then((data) => {
        setBookings(data); // Armazena as reservas no estado
        setMessage('');
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  // Chama a função fetchBookings quando o componente é montado
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="list-bookings">
      <h2 className="title">Lista de Reservas</h2>
      {message && <p className="message">{message}</p>}
      <ul className="bookings-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            {`ID da Reserva: ${booking.id}`} {/* Exibe o ID da reserva */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListBookings;
