import React, { useState } from 'react';
import './EditUser.css';

function EditUser() {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEdit = () => {
    const updatedUser = {
      name,
      email,
      cellphone: parseInt(cellphone.replace(/\D/g, '')),
      taxNumber,
      password,
    };

    fetch(`http://localhost:5071/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Usuário atualizado com sucesso!');
          setUserId('');
          setName('');
          setEmail('');
          setCellphone('');
          setTaxNumber('');
          setPassword('');
        } else {
          setMessage('Falha ao atualizar usuário.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="edit-user">
      <h2 className="title">Editar Usuário</h2>
      <form className="form">
        <input
          type="text"
          placeholder="ID do Usuário"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Celular"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="CPF"
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="button" onClick={handleEdit} className="button">Atualizar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default EditUser;
