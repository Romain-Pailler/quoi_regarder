import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const questions = [
  {
    contenu: 'Quel est le réalisateur du film ?',
    reponse: 'Ridley Scott',
    difficulty: 'Facile',
  },
  {
    contenu: 'Qui a composé la bande originale du film ?',
    reponse: 'Hans Zimmer',
    difficulty: 'Moyen',
  },
  {
    contenu: 'Dans quelle contrée a lieu la première bataille du film ?',
    reponse: 'Germanie',
    difficulty: 'Difficile',
  },
  {
    contenu: 'Comment se prénomme le serviteur de Maximus ?',
    reponse: 'Cicéron',
    difficulty: 'Moyen',
  },
  {
    contenu: 'Quels objets sont enterrés par Juba après la mort de Maximus ?',
    reponse: 'Figurines en bois',
    difficulty: 'Difficile',
  },
];


function QuizzGladiator() {
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
            <div style={{color:"green"}}>Bonne réponse !</div>
          ) : (
            <div style={{color:"red"}}>Mauvaise réponse !</div>
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

export default QuizzGladiator;
