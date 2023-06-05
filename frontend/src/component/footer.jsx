import React from 'react';
import { Typography, Link } from '@mui/material';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    
        <Navbar bg="warning" expand="lg" style={{ height: '80px' }} >
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} השאלת אופניים. כל הזכויות שמורות.
      </Typography>
      <Typography variant="body2" align="center">
        <Link href="/">אודות</Link> | <Link href="/contacts">צור קשר</Link> | <Link href="/Questions">שאלות נפוצות</Link>
      </Typography>
      <Typography variant="body2" align="center">
        כתובת: רחוב הרצל 123, ירושלים, ישראל
      </Typography>
      </Navbar>
  );
};

export default Footer;
