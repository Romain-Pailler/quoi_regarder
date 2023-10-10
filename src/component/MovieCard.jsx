import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

const cardStyle = {
    maxWidth: '400px', 
  };
function MovieCard(props) {
  const { title, imageUrl } = props;

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="auto"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title} {/* Titre du film */}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
