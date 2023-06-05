
import { Container, Typography, TextField, Button } from '@mui/material';
import React,{ useState } from 'react';

const ContactForm = () => {
const [name, setName] = useState('');
const[email, setEmail]= useState('');
const[message, setMessage]= useState('');
 
const handleSubmit = (event) => {
  event.preventDefault();
if (name==''||email==''||message=='') {
  alert('נא למלא את כל השדות');
  return;
}
    fetch('http://localhost:3001/contacts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }), 
    })
      .then(response => response.json())
      .then(data => {
        
        alert('נשלח בהצלחה');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        צור קשר
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="שם מלא"
          name="name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // required
        />
        <TextField
          label="כתובת דואר אלקטרוני"
          name="email"
          fullWidth
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
        />
        <TextField
          label="הודעה"
          name="message"
          fullWidth
          variant="outlined"
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
          // required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: '1rem' }}
        >
          שלח
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
