import React, { useEffect, useState } from 'react';
import './SearchPayment.css';

function ListPayments() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  // Função para buscar todos os pagamentos
  const fetchPayments = () => {
    fetch('http://localhost:5071/payment')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao buscar pagamentos.');
        }
      })
      .then((data) => {
        setPayments(data);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setLoading(false);
      });
  };

  // Chamar a função fetchPayments ao carregar o componente
  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div className="payment-container">
      <h2 className="title">Lista de Pagamentos</h2>

      {loading && <p>Carregando...</p>}
      {message && <p>{message}</p>}

      {!loading && payments.length === 0 && <p>Nenhum pagamento encontrado.</p>}

      <table className="payment-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Valor</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>R$ {payment.valor.toFixed(2)}</td>
              <td>{payment.status}</td>
              <td>{new Date(payment.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListPayments;
