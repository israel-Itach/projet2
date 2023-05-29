import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LoginPage({setUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [showInventoryPage, setShowInventoryPage] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // התחברות מוצלחת
        const userDetails = await response.json();

        // Save user details in local storage
        localStorage.setItem('user', JSON.stringify(userDetails));
        setUser(userDetails);
        console.log('User details saved in local storage:', userDetails);

        setErrorMessage("");
        
        navigate("/bikepage");
      } else {
        // התחברות נכשלה
        const errorText = await response.text();
        setErrorMessage(errorText);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("אירעה שגיאה בתהליך ההתחברות");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        דף התחברות
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          label="אימייל"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="סיסמה"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin}>
          התחבר
        </Button>
        לא רשום? <a href="/signup">לחץ כאן להרשמה</a>
        {errorMessage && <div>{errorMessage}</div>}
      </Box>
    </Box>
  );
}

export default LoginPage;
