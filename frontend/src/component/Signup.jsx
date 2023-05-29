import React, { useState } from 'react';
import './sign.css';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setconPassword] = useState('');
  const [mesError, setMesError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password != conpassword) {
      // alert("הסיסמאות אינם תואמות");
      setMesError("הסיסמאות אינם תואמות");
      return; 
    }
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setName('');
          setEmail('');
          setPassword('');
          setconPassword('');
          alert('התווסף נרשם חדש');
          // alert("Signup successful");

        } else {
          alert("Signup failed");
          // console.error(error);
        }

      })
      .catch((error) => {
        console.error(error);
        // setError(error);
      });
  };
   
  return (
    <form onSubmit={handleSubmit}>
      <h2>טופס הרשמה</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <label>
        confirm Password:
        <input type="password" value={conpassword} onChange={(e) => setconPassword(e.target.value)} />
      </label>
      {conpassword.length > 0 && password !== conpassword && (
  <span style={{ color: "red" }}>הסיסמאות אינם תואמות</span>
)}
      

      <br />
      <Button dir="ltr" type="submit" variant="contained" endIcon={<SendIcon />}>Send</Button>
      
    </form>
  );
}

export default Signup;
