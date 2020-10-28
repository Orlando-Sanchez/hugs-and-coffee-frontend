import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const requestSignup = e => {
    e.preventDefault();
    console.log('input data:', email, password, passwordConfirmation)
    axios.post('http://localhost:3001/users/create', { user: {
      'email': email,
      'password': password,
      'password_confirmation': passwordConfirmation
    }}).then(response => {
        console.log('Returned data:', response)
    });
  };
 
  return (
    <div className="App">
      <form onSubmit={requestSignup}>
        <label>
          Correo electrónico:
          <input 
                name="email" 
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
          />
        </label>
        <label>
          Contraseña:
          <input 
                name="password"
                type="text"
                value={password}
                onChange={event => setPassword(event.target.value)} 
          />
        </label>
        <label>
          Confirmar contraseña:
          <input 
                name="passwordConfirmation"
                type="text"
                value={passwordConfirmation}
                onChange={event => setPasswordConfirmation(event.target.value)} 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;