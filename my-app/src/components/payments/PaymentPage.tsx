import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage() {
  return (
    <div className="payment-page">
      <h1 className="title">Gerenciamento de Pagamentos</h1>
      <ul className="list">
        <li className="list-item">
            <Link to="/components/payments/RegisterPayment" className="link">Registrar Pagamento</Link>
        </li>
        <li className="list-item">
            <Link to="/components/payments/SearchPayment" className="link">Listar Pagamentos</Link>
        </li>
        <li className="list-item">
            <Link to="/components/payments/EditPayment" className="link">Editar Pagamento</Link>
        </li>
        <li className="list-item">
            <Link to="/components/payments/DeletPayment" className="link">Apagar Pagamento</Link>
        </li>
      </ul>
    </div>
  );
}

export default PaymentPage;
