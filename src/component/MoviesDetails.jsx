import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  if (id === undefined) {
    return (
      <div style={errorStyle}>
        <p>Paramètre d'URL manquant</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  const movieList = [
    {
      id: 0,
      title: '12 hommes en colère',
      imageUrl: 'url_de_l_image1.jpg',
      summary:
        "12 hommes en colère est un film sur un jury qui doit décider du sort d'un jeune homme accusé de meurtre.",
      director: 'Sidney Lumet',
      rating: 4.5,
      reviews: 'Un film captivant qui explore la justice et la moralité.',
    },
    // TODO : ajouter tous les autres films 
  ];

  // Recherchez le film correspondant à l'ID
  const movie = movieList.find((movie) => movie.id === parseInt(id, 10));

  if (!movie) {
    return (
      <div style={errorStyle}>
        <p>Le film que vous recherchez n'a pas été trouvé.</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{movie.title}</h2>
      <img style={imageStyle} src={movie.imageUrl} alt={movie.title} />
      <p style={textStyle}>Résumé : {movie.summary}</p>
      <p style={textStyle}>Réalisateur : {movie.director}</p>
      <p style={textStyle}>Note : {movie.rating}/5</p>
      <p style={textStyle}>Avis : {movie.reviews}</p>
      <Link to="/" style={linkStyle}>
        Retour à la liste des films
      </Link>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '400px',
  margin: '20px 0',
};

const textStyle = {
  fontSize: '18px',
  margin: '10px 0',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007bff',
};

const errorStyle = {
  textAlign: 'center',
  padding: '20px',
  color: 'red',
};

export default MovieDetails;
