import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
// import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Typography variant="h2" component="h1">
        Welcome to Bike Rental
      </Typography>
      <Typography variant="body1" component="p">
        Bike Rental is a website where you can easily rent bikes for your adventures, whether it's a leisurely ride through the park or an off-road adventure. Our inventory is regularly maintained to ensure that all bikes are in top condition.
      </Typography>
      <Typography variant="body1" component="p">
        Our rental process is simple and straightforward. Just browse our inventory, select the bike you want, and schedule a pickup time. We offer flexible rental periods to suit your needs, and our rental rates are affordable and competitive.
      </Typography>
      <Link to="/inventory">
        <Button variant="contained" color="primary">
          Check out our inventory
        </Button>
      </Link>
    </div>
  );
}

export default HomePage;
