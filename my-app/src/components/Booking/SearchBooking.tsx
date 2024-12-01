import React, { useState, useEffect } from 'react';
import './SearchBooking.css';

function SearchBooking() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Função para buscar todas as reservas
  const fetchBookings = () => {
    fetch('http://localhost:5071/booking')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao buscar reservas.');
        }
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setLoading(false);
      });
  };

  // Chamar a função fetchBookings ao carregar o componente
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="booking-container">
      <h2 className="title">Lista de Reservas</h2>

      {loading && <p>Carregando...</p>}
      {message && <p>{message}</p>}

      {!loading && bookings.length === 0 && <p>Nenhuma reserva encontrada.</p>}

      <table className="booking-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.userId}</td>
              <td>{new Date(booking.startDate).toLocaleDateString()}</td>
              <td>{new Date(booking.endDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchBooking;
