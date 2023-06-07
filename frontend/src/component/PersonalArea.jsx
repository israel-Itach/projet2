import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container } from "@mui/material";

// const navigate = useNavigate();

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/manager", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // טיפול בתשובה מהשרת
        if (data.error) {
          // שגיאה בפרטי הכניסה
          alert(data.error);
          setUsername("");
          setPassword("");
        } else {
          // הכניסה לאיזור האישי
          console.log("התחברת בהצלחה!");
          alert(data.message);
          // הוסיפו כאן את הלוגיקה של המעבר לדף המנהל
          navigate("./navigate");
          // דוגמה לשליחת נתונים לשרת
        }
      })
      .catch((error) => {
        console.error("שגיאה בביצוע הבקשה:", error);
      });

    
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        כניסת מנהל
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="username"
          label="שם משתמש"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="password"
          label="סיסמה"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          כניסה לאיזור האישי
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: "20px" }}>
        או&nbsp;
        <Link to="/navigate">מעבר לדף המנהל</Link>
      </Typography>
    </Container>
  );
};

export default AdminLogin;
