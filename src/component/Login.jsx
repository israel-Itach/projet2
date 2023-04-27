import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      alert('Failed to sign up');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Username
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
