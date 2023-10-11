import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../style/MovieCard.css';
function MovieCard(props) {
  const { title, imageUrl } = props;

  return (
    <Card className="cardStyle">
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
