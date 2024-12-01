import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./components/Usuários/UserList";
import RegisterUser from "./components/Usuários/RegisterUser";
import DeleteUser from "./components/Usuários/DeletUser";
import EditUser from "./components/Usuários/EditUser";
import UserSearch from "./components/Usuários/UserSearch";
import UserPage from "./components/Usuários/UserPage";
import PaymentPage from "./components/payments/PaymentPage";
import SearchPayment from "./components/payments/SearchPayment";
import RegisterPayment from "./components/payments/RegisterPayment";
import DeletePayment from "./components/payments/DeletPayment";
import EditPayment from "./components/payments/EditPayment";
import RegisterBooking from "./components/Booking/RegisterBooking";
import SearchBooking from "./components/Booking/SearchBooking";
import EditBooking from "./components/Booking/EditBooking";
import DeleteBooking from "./components/Booking/DeleteBooking";
import ListBookings from "./components/Booking/ListBookings";
import './Web.css';
import BookingPage from "./components/Booking/Bookingpage";
import SpacePage from "./components/Spaces/SpacePage";
import RegisterSpace from "./components/Spaces/RegisterSpace";
import EditSpace from "./components/Spaces/EditSpace";
import DeleteSpace from "./components/Spaces/DeleteSpace";
import ListSpaces from "./components/Spaces/ListSpaces";

function App() {
  return (
    <div id="web-app" className="web-app">
      <BrowserRouter>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/components/Usuários/UserPage" className="nav-link">Usuários</Link>
            </li>
            <li className="nav-item">
              <Link to="/components/payments/PaymentPage" className="nav-link">Pagamentos</Link>
            </li>
            <li className="nav-item">
              <Link to="/components/bookings/BookingPage" className="nav-link">Booking</Link>
            </li>
            <li className="nav-item">
              <Link to="/components/spaces/SpacePage" className="nav-link">Espaços</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Rotas de Usuários */}
          <Route path="/components/Usuários/UserPage" element={<UserPage />} />
          <Route path="/components/Usuários/UserList" element={<UserList />} />
          <Route path="/components/Usuários/UserSearch" element={<UserSearch />} />
          <Route path="/components/Usuários/RegisterUser" element={<RegisterUser />} />
          <Route path="/components/Usuários/DeletUser" element={<DeleteUser />} />
          <Route path="/components/Usuários/EditUser" element={<EditUser />} />
          
          {/* Rotas de Pagamentos */}
          <Route path="/components/payments/PaymentPage" element={<PaymentPage />} />
          <Route path="/components/payments/SearchPayment" element={<SearchPayment />} />
          <Route path="/components/payments/RegisterPayment" element={<RegisterPayment />} />
          <Route path="/components/payments/DeletPayment" element={<DeletePayment />} />
          <Route path="/components/payments/EditPayment" element={<EditPayment />} />

          {/* Rotas de Bookings */}
          <Route path="/components/bookings/BookingPage" element={<BookingPage />} />
          <Route path="/components/bookings/SearchBooking" element={<SearchBooking />} />
          <Route path="/components/bookings/RegisterBooking" element={<RegisterBooking />} />
          <Route path="/components/bookings/EditBooking" element={<EditBooking />} />
          <Route path="/components/bookings/DeleteBooking" element={<DeleteBooking />} />
          <Route path="/components/bookings/ListBookings" element={<ListBookings />} />

          {/* Rotas de Espaços */}
          <Route path="/components/spaces/SpacePage" element={<SpacePage />} />
          <Route path="/components/spaces/RegisterSpace" element={<RegisterSpace />} />
          <Route path="/components/spaces/EditSpace" element={<EditSpace />} />
          <Route path="/components/spaces/DeleteSpace" element={<DeleteSpace />} />
          <Route path="/components/spaces/SpaceList" element={<ListSpaces />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
