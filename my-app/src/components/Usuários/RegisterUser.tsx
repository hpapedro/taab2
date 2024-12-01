import React, { useState } from 'react';
import './RegisterUser.css';

function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user = {
      name,
      email,
      cellphone: parseInt(cellphone.replace(/\D/g, '')),
      taxNumber,
      password,
    };

    fetch('http://localhost:5071/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Usuário cadastrado com sucesso!');
          setName('');
          setEmail('');
          setCellphone('');
          setTaxNumber('');
          setPassword('');
        } else {
          setMessage('Falha ao cadastrar usuário.');
        }
      })
      .catch(() => {
        setMessage('Erro ao tentar se comunicar com a API.');
      });
  };

  return (
    <div className="register-user">
      <h2 className="title">Cadastrar Usuário</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <input
          type="text"
          placeholder="Celular"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
          required
          className="input"
        />
        <input
          type="text"
          placeholder="CPF"
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">Cadastrar</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default RegisterUser;
