import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';

const Navigation = () => {
  return (
    <nav>
      <Box marginTop={2.5} display="flex" flexDirection="column" alignItems="center">
        <Button
          component={Link}
          to="/intermediate/addbike"
          variant="contained"
          color="primary"
          sx={{ marginBottom: '10px' }}
        >
          Add Bike
        </Button>
        <Button
          component={Link}
          to="/intermediate/delete"
          variant="contained"
          color="primary"
        >
          Delete
        </Button>
      </Box>
    </nav>
  );
};

export default Navigation;
