import React, { useEffect, useState } from 'react';
import { Container, Typography, Divider } from '@mui/material';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  const deleteMessage = (messageId) => {
    // ניתוח הבקשה למחיקת הודעה מהשרת
    fetch(`http://localhost:3001/contacts/${messageId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        // הסרת ההודעה מהרשימה
        setMessages(prevMessages => prevMessages.filter(message => message.id !== messageId));
      })
      .catch(error => console.error(error));
  };
  

  useEffect(() => {
    // Fetch messages from server
    fetch('http://localhost:3001/contacts')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        רשימת הודעות
      </Typography>
      {messages.map(message => (
       <div key={message.id} style={{ background: 'lightblue', borderRadius: '8px', width: '350px', marginBottom: '27px' }}>
       <Typography variant="h6" component="p">
         שם: {message.name}
       </Typography>
       <Typography variant="body1" component="p">
         דוא"ל: {message.email}
       </Typography>
       <Typography variant="body1" component="p">
         תוכן ההודעה: {message.message}
       </Typography>
       <Divider sx={{ my: 2 }} />
       <button  style={{ background: 'red', borderRadius: '6px', marginBottom: '16px'}} onClick={() => deleteMessage(message.id)}>מחק הודעה</button>
     </div>
     
      ))}
    </Container>
  );
};

export default MessageList;
