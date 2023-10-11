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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quoi regarder
        </Typography>
        <Button component={Link} to="/quizzGladiator" color="inherit">
          Quizz Gladiator
        </Button>
        <Button component={Link} to="/quizzLePrestige" color="inherit">
          Quizz Le Prestige
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
