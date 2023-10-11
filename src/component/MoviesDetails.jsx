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
      reviews: [
        {
          name: "Sophie",
          avis: "12 hommes en colère est un film captivant qui explore la justice et la moralité. La performance de Henry Fonda est remarquable.",
          note: 9.20,
        },
        {
          name: "Maxime",
          avis: "Ce film est un chef-d'œuvre du cinéma. Il offre une leçon de suspense et d'émotion.",
          note: 9.50,
        },
        {
          name: "Isabelle",
          avis: "Des performances d'acteurs exceptionnelles et un scénario brillant font de ce film un incontournable.",
          note: 9.30,
        },
        {
          name: "Lucas",
          avis: "12 hommes en colère est un classique intemporel qui mérite d'être vu et revu. Il soulève des questions importantes.",
          note: 9.40,
        },
        {
          name: "Anna",
          avis: "Un film puissant qui suscite la réflexion et l'empathie. C'est un must-see pour les amateurs de drame juridique.",
          note: 9.10,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Barbie est un film enchanteur pour les enfants. Il véhicule des valeurs positives et encourage l'imagination.",
          note: 8.00,
        },
        {
          name: "Maxime",
          avis: "Mes enfants adorent ce film. Il offre une évasion vers un monde magique et coloré.",
          note: 7.50,
        },
        {
          name: "Isabelle",
          avis: "Barbie est un divertissement léger, parfait pour les jeunes spectateurs. Il encourage la créativité.",
          note: 7.20,
        },
        {
          name: "Lucas",
          avis: "Un film qui plaira aux enfants, mais qui peut sembler un peu simple pour les adultes.",
          note: 6.80,
        },
        {
          name: "Anna",
          avis: "Barbie ne fait pas partie de mes préférences cinématographiques, mais il a son public cible.",
          note: 6.50,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Django Unchained est un western audacieux et captivant. Les performances de Jamie Foxx et Christoph Waltz sont exceptionnelles.",
          note: 8.90,
        },
        {
          name: "Maxime",
          avis: "Un film qui ne laisse personne indifférent. Christoph Waltz brille, et l'histoire est une réflexion sur l'injustice.",
          note: 8.70,
        },
        {
          name: "Isabelle",
          avis: "Quentin Tarantino livre un film intense avec un mélange d'action et de drame. Leonardo DiCaprio est terrifiant.",
          note: 8.60,
        },
        {
          name: "Lucas",
          avis: "Django Unchained est un film courageux qui aborde des thèmes délicats. La performance de Samuel L. Jackson est marquante.",
          note: 8.50,
        },
        {
          name: "Anna",
          avis: "Le film est visuellement spectaculaire, mais il est également dérangeant. Une expérience cinématographique inoubliable.",
          note: 8.40,
        },
      ],
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
      reviews: [
        {
          name: "Alice",
          avis: "Fight Club est un film culte, un commentaire social brillant. Les performances sont inoubliables.",
          note: 9.20,
        },
        {
          name: "Thomas",
          avis: "Ce film est une véritable claque visuelle et conceptuelle. Brad Pitt est incroyable en Tyler Durden.",
          note: 9.00,
        },
        {
          name: "Sophie",
          avis: "Un film provocateur qui pousse à la réflexion sur la société de consommation. Edward Norton est excellent.",
          note: 8.70,
        },
        {
          name: "Maxime",
          avis: "Fight Club est un film sombre et dérangeant, mais c'est ce qui le rend si fascinant. Une réflexion sur l'aliénation.",
          note: 8.40,
        },
        {
          name: "Laura",
          avis: "J'ai trouvé le film perturbant et parfois trop violent. Ce n'est pas mon genre de film préféré.",
          note: 7.50,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Gladiator est un chef-d'œuvre absolu. L'histoire, la performance de Russell Crowe et les scènes de combat sont exceptionnels.",
          note: 9.50,
        },
        {
          name: "Lucas",
          avis: "Ce film est une épopée épique avec une bande-son grandiose. Je le considère comme l'un des meilleurs films de tous les temps.",
          note: 9.60,
        },
        {
          name: "Anna",
          avis: "Joaquin Phoenix incarne un méchant mémorable. La cinématographie est à couper le souffle, et l'histoire est captivante.",
          note: 9.30,
        },
        {
          name: "Thomas",
          avis: "Gladiator est un chef-d'œuvre du cinéma. Il m'a transporté dans l'Antiquité romaine, et Russell Crowe est exceptionnel.",
          note: 9.70,
        },
        {
          name: "Emma",
          avis: "Le film est tout simplement incroyable. Russell Crowe est à son meilleur, et l'intrigue est puissante et émotionnelle.",
          note: 9.40,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Inception est un chef-d'œuvre de la science-fiction. Le scénario complexe est magnifiquement réalisé.",
          note: 9.20,
        },
        {
          name: "Alexandre",
          avis: "Christopher Nolan a créé un film visuellement spectaculaire. Leonardo DiCaprio livre une performance exceptionnelle.",
          note: 9.10,
        },
        {
          name: "Isabelle",
          avis: "Inception est un voyage dans l'imaginaire captivant. La notion de réalité est constamment remise en question.",
          note: 8.90,
        },
        {
          name: "Thomas",
          avis: "Ce film est une énigme fascinante qui incite à la réflexion. La musique de Hans Zimmer est inoubliable.",
          note: 9.00,
        },
        {
          name: "Laura",
          avis: "Inception est un film audacieux, mais j'ai parfois eu du mal à suivre l'intrigue complexe.",
          note: 7.80,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Le Prestige est un thriller psychologique brillamment exécuté. Les performances de Jackman et Bale sont incroyables.",
          note: 9.00,
        },
        {
          name: "Maxime",
          avis: "Un film captivant avec des rebondissements inattendus. L'obsession des personnages est palpitante.",
          note: 8.80,
        },
        {
          name: "Isabelle",
          avis: "Christopher Nolan livre un autre chef-d'œuvre du cinéma. Le Prestige est un puzzle fascinant.",
          note: 9.20,
        },
        {
          name: "Lucas",
          avis: "Le Prestige est un film intense qui m'a tenu en haleine du début à la fin. La narration est ingénieuse.",
          note: 8.90,
        },
        {
          name: "Anna",
          avis: "J'ai adoré les performances des acteurs, mais j'ai trouvé le film un peu sombre et dérangeant.",
          note: 7.70,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Oppenheimer est un film fascinant qui explore l'histoire du projet Manhattan. La performance de Cillian Murphy est impressionnante.",
          note: 8.90,
        },
        {
          name: "Maxime",
          avis: "Ce film offre un regard percutant sur les enjeux de la Seconde Guerre mondiale et les implications de la bombe atomique. Un incontournable.",
          note: 9.10,
        },
        {
          name: "Isabelle",
          avis: "Oppenheimer est un chef-d'œuvre de Christopher Nolan. L'histoire est à la fois historiquement précise et captivante.",
          note: 9.20,
        },
        {
          name: "Lucas",
          avis: "Le film nous plonge dans l'intensité de la création de la bombe atomique. C'est une expérience cinématographique mémorable.",
          note: 8.80,
        },
        {
          name: "Anna",
          avis: "Un film qui offre un aperçu saisissant de l'histoire. Les performances et la réalisation sont de haut niveau.",
          note: 9.00,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Le Silence des Agneaux est un thriller psychologique incontournable. Les performances de Jodie Foster et Anthony Hopkins sont magistrales.",
          note: 9.20,
        },
        {
          name: "Maxime",
          avis: "Un film captivant avec une atmosphère sombre et tendue. Anthony Hopkins en Hannibal Lecter est terrifiant.",
          note: 8.90,
        },
        {
          name: "Isabelle",
          avis: "Le Silence des Agneaux est un chef-d'œuvre du suspense. L'intrigue est palpitante et les personnages sont fascinants.",
          note: 8.80,
        },
        {
          name: "Lucas",
          avis: "Ce film est un classique intemporel. Jodie Foster apporte une profondeur à son personnage, et Anthony Hopkins est inoubliable.",
          note: 9.10,
        },
        {
          name: "Anna",
          avis: "J'ai trouvé le film très intense, mais il m'a captivé du début à la fin. L'histoire est brillamment racontée.",
          note: 8.70,
        },
      ],
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
      reviews: [
        {
          name: "Sophie",
          avis: "Whiplash est un film intense qui explore la poursuite de la perfection artistique. Les performances de Teller et Simmons sont incroyables.",
          note: 9.20,
        },
        {
          name: "Maxime",
          avis: "Un film brillant qui met en lumière le prix de l'excellence. J.K. Simmons est exceptionnel en tant que mentor tyrannique.",
          note: 9.10,
        },
        {
          name: "Isabelle",
          avis: "Whiplash est une expérience cinématographique puissante. La musique et la tension sont captivantes.",
          note: 8.90,
        },
        {
          name: "Lucas",
          avis: "Ce film est un tour de force. Il m'a tenu en haleine, et la finale est époustouflante.",
          note: 9.00,
        },
        {
          name: "Anna",
          avis: "J'ai été impressionnée par la performance de J.K. Simmons. Whiplash est un film inoubliable sur l'art et l'ambition.",
          note: 8.80,
        },
      ],
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

  // Fonction pour calculer la moyenne des notes
  function calculateAverageRating(reviews) {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((acc, review) => acc + review.note, 0);
    return (totalRating / reviews.length).toFixed(2);
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
      <p className='textStyle'>Note : {calculateAverageRating(movie.reviews)}/10</p>
      <p className='textStyle'>Avis :
        <ul className='listStyleType'>
          {movie.reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}</strong> a donné une note de {review.note}/10 - "{review.avis}"
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
