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
          to="/intermediate/inventory"
          variant="contained"
          color="primary"
          sx={{ marginBottom: '10px' }}
        >
          Inventory
        </Button>
        <Button
          component={Link}
          to="/intermediate/MessageList"
          variant="contained"
          color="primary"
          sx={{ marginBottom: '10px' }}
        >
          MessageList
        </Button>
      </Box>
    </nav>
  );
};

export default Navigation;
