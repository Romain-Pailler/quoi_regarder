import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography  component={Link} to="/" variant="h6"sx={{ flexGrow: 1 }}>
          Quoi regarder ?
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Quizz Gladiator
        </Button>
        <Button component={Link} to="/" color="inherit">
          Quizz Le Prestige
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
