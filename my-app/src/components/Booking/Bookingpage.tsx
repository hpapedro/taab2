import React from 'react';
import { Link } from 'react-router-dom';
import './BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-page">
      <h1 className="title">Gerenciamento de Booking</h1>
      <ul className="list">
        <li className="list-item">
          <Link to="/components/bookings/RegisterBooking" className="link">Cadastrar Booking</Link>
        </li>
        <li className="list-item">
          <Link to="/components/bookings/SearchBooking" className="link">Buscar Booking</Link>
        </li>
        <li className="list-item">
          <Link to="/components/bookings/EditBooking" className="link">Editar Booking</Link>
        </li>
        <li className="list-item">
          <Link to="/components/bookings/DeleteBooking" className="link">Deletar Booking</Link>
        </li>
        <li className="list-item">
          <Link to="/components/bookings/ListBookings" className="link">Listar bookings</Link>
        </li>
      </ul>
    </div>
  );
}

export default BookingPage;
