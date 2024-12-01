import React, { useState } from 'react';
import './DeletPayment.css';

function DeletePayment() {
  const [paymentIdToDelete, setPaymentIdToDelete] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleDeletePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentIdToDelete) {
      setDeleteMessage('Por favor, insira o ID do pagamento.');
      return;
    }

    fetch(`http://localhost:5071/payment/${paymentIdToDelete}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setDeleteMessage('Pagamento excluído com sucesso!');
          setPaymentIdToDelete(''); // Limpar o campo de ID
        } else {
          setDeleteMessage('Falha ao excluir o pagamento.');
        }
      })
      .catch(() => {
        setDeleteMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="delete-payment-container">
      <h2 className="title">Excluir Pagamento</h2>
      <form onSubmit={handleDeletePayment} className="form">
        <div className="form-group">
          <label>ID do Pagamento</label>
          <input
            type="text"
            value={paymentIdToDelete}
            onChange={(e) => setPaymentIdToDelete(e.target.value)}
            required
            className="input"
          />
        </div>
        <div>
          <button type="submit" className="button">Excluir</button>
        </div>
      </form>

      {deleteMessage && <p className="message">{deleteMessage}</p>}
    </div>
  );
}

export default DeletePayment;
