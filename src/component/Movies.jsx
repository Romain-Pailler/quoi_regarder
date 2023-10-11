import React from 'react';
import { Link } from 'react-router-dom';
import Twelve_Angry_Men from '../assets/12_angry_men.png';
import Barbie from '../assets/barbie.png';
import Django from '../assets/django.png';
import Fight_Club from '../assets/fight_club.png';
import Gladiator from '../assets/gladiator.png';
import Inception from '../assets/inception.png';
import Le_Prestige from '../assets/le_prestige.png';
import Oppenheimer from '../assets/oppenheimer.png';
import Silence_of_the_lamb from '../assets/silence_of_the_lamb.png';
import Whiplash from '../assets/whiplash.png';
import '../style/Movies.css';
import MovieCard from './MovieCard';
const MovieList = [
  {
    title: '12 hommes en colère',
    imageUrl: Twelve_Angry_Men,
  },
  {
    title: 'Barbie',
    imageUrl: Barbie,
  },
  {
    title: 'Django Unchained',
    imageUrl: Django,
  },
  {
    title: 'Fight Club',
    imageUrl: Fight_Club,
  },
  {
    title: 'Gladiator',
    imageUrl: Gladiator,
  },
  {
    title: 'Inception',
    imageUrl: Inception,
  },
  {
    title: 'Le prestige',
    imageUrl: Le_Prestige,
  },
  {
    title: 'Oppenheimer',
    imageUrl: Oppenheimer,
  },
  {
    title: 'Le silence des agneaux',
    imageUrl: Silence_of_the_lamb,
  },
  {
    title: 'Whiplash',
    imageUrl: Whiplash,
  }

];
function Movies() {

  return (
    <div className='MovieListStyle'>
      {MovieList.map((movie, index) => (
        <Link to={`/movie/${index}`} key={index}>
          <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl}/>
        </Link>
      ))}
    </div>
  );
}

export default Movies;

