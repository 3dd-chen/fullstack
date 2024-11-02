import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:8000/api/register/', {
      username,
      email,
      password,
    })
    .then(response => {
      setMessage('User registered successfully!');
      console.log('User registered successfully:', response.data);
    })
    .catch(error => {
      setMessage('There was an error registering the user.');
      console.error('There was an error registering the user!', error);
    });
  };

  return (
    <div style={styles.container}>
      <h1>Register</h1>
      <div style={styles.form}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginBottom: '24px',
  },
  label: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  input: {
    height: '40px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginBottom: '16px',
    paddingLeft: '8px',
  },
};

export default Register;