import React, { useState } from 'react';
import './RegisterPayment.css';

function RegisterPayment() {
  const [valor, setValor] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payment = {
      valor: parseFloat(valor),
      date,
      status,
    };

    fetch('http://localhost:5071/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payment),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Pagamento cadastrado com sucesso!');
          setValor('');
          setDate('');
          setStatus('');
        } else {
          setMessage('Falha ao cadastrar pagamento.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="payment-container">
      <h2 className="title">Cadastrar Pagamento</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="ex: Pago, Pendente, Cancelado"
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

export default RegisterPayment;
