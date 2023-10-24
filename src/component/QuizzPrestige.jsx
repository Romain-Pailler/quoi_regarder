import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const reponses = [
  {
    contenu: 'Qui est le réalisateur du film ?',
    reponse: 'Christopher Nolan',
    difficulty: 'Facile',
  },
  {
    contenu: 'Quel acteur jouant dans Le Prestige est présent dans le plus de films de son réalisateur ?',
    reponse: 'Michael Caine',
    difficulty: 'Moyen',
  },
  {
    contenu: "Quel objet Alfred Borden (Bale) utilise-t-il lorsqu'il cherche à détourner l'attention ?",
    reponse: 'Une balle',
    difficulty: 'Difficile',
  },
  {
    contenu: "Pour quel tour de magie les deux magiciens se battent-ils ?",
    reponse: "L'homme transporté",
    difficulty: 'Moyen',
  },
  {
    contenu: "Quel grand scientifique fabrique une machine pour Robert ?",
    reponse: 'Nikola Tesla',
    difficulty: 'Difficile',
  },
];


const QuizzPrestige = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [input_reponse, setInputReponse] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleNextQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
    réinitialiser();
  };

  const handlePreviousQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1
    );
    réinitialiser();
  };

  const handleValidateAnswer = () => {
    const isCorrect = input_reponse.toLowerCase() === questions[activeQuestionIndex].reponse.toLowerCase();
    setIsAnswerCorrect(isCorrect);

    // Réinitialise la valeur de l'input
    réinitialiser();

    // Système de temps pour effacer le message après un certain délai
    setTimeout(() => {
      setIsAnswerCorrect(null);
    }, 5000); // 5000 ms (5 secondes) avant de réinitialiser le message
  };
  const réinitialiser = () => {
    setInputReponse('');// Réinitialise la valeur de l'input
  };
  return (
    <div style={{ height: '100vh', margin: '80px auto 30px auto' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Question {activeQuestionIndex + 1}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Niveau de difficulté : {questions[activeQuestionIndex].difficulty}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {questions[activeQuestionIndex].contenu}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        <input type='text' placeholder='Votre réponse' name='nom_reponse' onChange={(e) => setInputReponse(e.target.value)} value={input_reponse} />
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePreviousQuestion} style={{ marginRight: '5px' }} variant="contained" color="primary">
          Précédent
        </Button>
        <Button onClick={handleValidateAnswer} style={{ marginRight: '5px' }} variant="contained" color="primary">
          Valider
        </Button>
        <Button onClick={handleNextQuestion} variant="contained" color="primary">
          Suivant
        </Button>
      </div>
      {isAnswerCorrect !== null && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {isAnswerCorrect ? (
            <div>Bonne réponse</div>
          ) : (
            <div>Mauvaise réponse</div>
          )}
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/" className='linkStyle'>
          Retour à la liste des films
        </Link>
      </div>
    </div>
  );
};

export default QuizzPrestige;
