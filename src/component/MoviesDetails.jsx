import React from 'react';
import { Link, useParams } from 'react-router-dom';
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
import '../style/MoviesDetails.css';
const MovieDetails = () => {
  const { id } = useParams();
  console.log(useParams())
  if (id === undefined) {
    return (
      <div className='errorStyle'>
        <p>Paramètre d'URL manquant</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  const movieList = [
    {
      id: 0,
      title: "12 hommes en colère",
      imageUrl: Twelve_Angry_Men,
      summary:
        "Un jeune homme d'origine modeste est accusé du meurtre de son père et risque la peine de mort. Le jury composé de douze hommes se retire pour délibérer et procède immédiatement à un vote: onze votent coupables, or la décision doit être prise à l'unanimité. Le juré qui a voté non-coupable, sommé de se justifier, explique qu'il a un doute et que la vie d'un homme mérite quelques heures de discussion. Il s'emploie alors à les convaincre un par un. ",
      director: "Sidney Lumet",
      actors: ["Henry Fonda", "Martin Balsam"],
      roles: ["M. Davis, le juré no 8, un architecte", "le juré no 1, un entraîneur de football américain"],
      rating: 9.10,
      reviews: {
        name: "Critique 1",
        avis: "Un film captivant qui explore la justice et la moralité.",
        note: 9.10,
      },
    },
    {
      id: 1,
      title: "Barbie",
      imageUrl: Barbie,
      summary:
        "Parallèlement au monde réel, il existe Barbieland, un monde parfait où les poupées Barbie vivent joyeusement, persuadées d'avoir rendu les filles humaines heureuses. Mais un jour, une Barbie commence à se poser des questions et à devenir humaine. Sur les conseils d'une Barbie bizarre, elle part pour le monde réel afin de retrouver la fille à laquelle elle appartenait afin de pouvoir retrouver sa perfection. Dans sa quête, elle est accompagnée par un Ken fou amoureux d'elle qui va également trouver un sens à sa vie dans le monde réel…",
      director: "Grata Gerwing",
      actors: ["Margot Robbie", "Ryan Gosling"],
      roles: ["Barbie", "Ken"],
      rating: 8.20,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 2,
      title: "Django Unchained",
      imageUrl: Django,
      summary:
        "Deux ans avant la Guerre civile, un ancien esclave du nom de Django s'associe avec un chasseur de primes d'origine allemande qui l'a libéré: il accepte de traquer avec lui des criminels recherchés. En échange, il l'aidera à retrouver sa femme perdue depuis longtemps et esclave elle aussi.",
      director: "Quentin Tarantino",
      actors: ["Jamie Foxx", "Christoph Waltz"],
      roles: ["Django Freeman", "King Schultz"],
      rating: 8,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 3,
      title: "Fight Club",
      imageUrl: Fight_Club,
      summary:
        "Pourvu d'une situation des plus enviable, un jeune homme à bout de nerfs retrouve un équilibre relatif en compagnie de Marla, rencontrée dans un groupe d'entraide. Il fait également la connaissance de Tyler Durden, personnage enthousiaste et charismatique. Ensemble, ils fondent le Fight Club, où ils organisent des combats clandestins et violents, destinés à évacuer l'énergie négative de chacun.",
      director: "David Fincher",
      actors: ["Brad Pitt", "Edward Norton"],
      roles: ["Tyler Durden", "le narrateur "],
      rating: 7.4,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 4,
      title: "Gladiator",
      imageUrl: Gladiator,
      summary:
        "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
      director: "Ridley Scott",
      actors: ["Russell Crowe", "Joaquin Phoenix"],
      roles: ["Maximus Decimus Meridius", "Commonde "],
      rating: 10,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 5,
      title: "Inception",
      imageUrl: Inception,
      summary:
        "Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
      director: "Christopher Nolan",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      roles: ["Dominic « Dom » Cobb, l'extracteur", "Arthur, l'organisateur"],
      rating: 8,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 6,
      title: "Le Prestige",
      imageUrl: Le_Prestige,
      summary:
        "Deux magiciens du 19e siècle s'engagent dans une lutte sans merci non seulement pour se surpasser l'un l'autre, mais pour détruire l'adversaire. L'un deux est accusé du meurtre de son rival qui s'est noyé au cours d'un tour de magie, après être tombé d'une trappe dans une cuve remplie d'eau et verrouillée, l'exécution du tour ayant apparemment mal tourné.",
      director: "Christopher Nolan",
      actors: ["Hugh Jackaman", "Christian Bale"],
      roles: ["Robert Angier / Gerald Root", "Alfred Borden / Fallon"],
      rating: 7.1,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 7,
      title: "Oppenheimer",
      imageUrl: Oppenheimer,
      summary:
        "Pendant la Seconde Guerre mondiale, le lieutenant-général Leslie Groves Jr. nomme le physicien J. Robert Oppenheimer pour travailler sur le projet ultra-secret Manhattan. Oppenheimer et une équipe de scientifiques passent des années à développer et à concevoir la bombe atomique. Leur travail se concrétise le 16 juillet 1945, alors qu'ils assistent à la première explosion nucléaire au monde, changeant à jamais le cours de l'histoire.",
      director: "Christopher Nolan",
      actors: ["Cillian Murphy", "Robert Downey Jr."],
      roles: ["Robert Oppenheimer", "Lewis Strauss"],
      rating: 8.70,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 8,
      title: "Le silence des agneaux",
      imageUrl: Silence_of_the_lamb,
      summary:
        "Un psychopathe connu sous le nom de `Buffalo Bill' sème la terreur dans le `Middle West' en kidnappant et en assassinant de jeunes femmes. Clarice Starling, une jeune agent du FBI, est chargée d'interroger l'ex-psychiatre Hannibal Lecter. Psychopathe redoutablement intelligent et porté sur le cannibalisme, Lecter est capable de lui fournir des informations. Entre eux s'établit un lien de fascination et de répulsion.",
      director: "Jonathan Demme",
      actors: ["Jodie Foster", "Anthony Hopkins"],
      roles: ["Clarice Starling", "Dr Hannibal Lecter"],
      rating: 8.50,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
    {
      id: 9,
      title: "Whiplash",
      imageUrl: Whiplash,
      summary:
        "Il n'y a que la musique dans la vie d'Andrew. Le jeune homme de 19 ans n'hésite pas à sacrifier ses relations amoureuses, amicales et familiales pour devenir un des meilleurs batteurs de jazz de sa génération. L'entraînement est constant, la concurrence est rude et une façon d'arriver au sommet est d'entrer au conservatoire de Manhattan. Un réputé chef d'orchestre le remarque et il le met à l'essai. Andrew fera tout ce qui est en son pouvoir pour ne pas le décevoir.",
      director: "Damien Chazelle",
      actors: ["Miles Teller", "J. K. Simmons"],
      roles: ["Andrew Neiman", "Terence Fletcher"],
      rating: 8.60,
      reviews: ["Un film captivant qui explore la justice et la moralité."],
    },
  ];

  // Recherchez le film correspondant à l'ID
  const movie = movieList.find((movie) => movie.id === parseInt(id, 10));

  if (!movie) {
    return (
      <div className='errorStyle'>
        <p>Le film que vous recherchez n'a pas été trouvé.</p>
        <Link to="/">Retour à la liste des films</Link>
      </div>
    );
  }

  return (
    <div className='containerStyle'>
      <h2 className='titleStyle'>{movie.title}</h2>
      <img className='imageStyle' src={movie.imageUrl} alt={movie.title} />
      <p className='textStyle'>Résumé : {movie.summary}</p>
      <p className='textStyle'>Réalisateur : {movie.director}</p>
      <p className='textStyle'>Acteurs :
        <ul className='listStyleType'>
          {movie.actors.map((actor, index) => (
            <li key={index}>
              {actor} a joué le rôle de {movie.roles[index]}
            </li>
          ))}
        </ul>
      </p>
      <p className='textStyle'>Note : {movie.rating}/10</p>
      <p className='textStyle'>Avis : {movie.reviews}</p>
      <Link to="/" className='linkStyle'>
        Retour à la liste des films
      </Link>
    </div>
  );
};
export default MovieDetails;
