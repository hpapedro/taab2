import React, { useState, useEffect } from 'react';
import './EditPayment.css';

function EditPayment() {
  const [paymentId, setPaymentId] = useState<number | string>('');
  const [valor, setValor] = useState<number | string>(''); // Valor do pagamento
  const [status, setStatus] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Função para buscar o pagamento e preencher os campos
  const fetchPayment = (id: string) => {
    fetch(`http://localhost:5071/payment/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Falha ao buscar pagamento.');
        }
      })
      .then((data) => {
        setPaymentId(data.id);
        setValor(data.valor);
        setStatus(data.status);
        setDate(data.date);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  // Função para enviar a alteração do pagamento
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPayment = {
      valor,
      status,
      date,
    };

    fetch(`http://localhost:5071/payment/${paymentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPayment),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Pagamento alterado com sucesso!');
        } else {
          setMessage('Falha ao alterar pagamento.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  // Chamar a função de busca do pagamento quando o ID for passado
  useEffect(() => {
    if (paymentId) {
      fetchPayment(paymentId as string);
    }
  }, [paymentId]);

  return (
    <div className="edit-payment-container">
      <h2 className="title">Alterar Pagamento</h2>

      <form onSubmit={handleEditSubmit} className="form">
        <div className="form-group">
          <label>ID do Pagamento</label>
          <input
            type="text"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            placeholder="Digite o ID do pagamento"
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Digite o valor"
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
            placeholder="Digite o status"
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

        <div>
          <button type="submit" className="button">Alterar Pagamento</button>
        </div>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default EditPayment;
