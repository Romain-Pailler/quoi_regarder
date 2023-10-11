import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const questions = [
  {

    contenu: 'Quel est le réalisateur du film ?',
    reponse: 'oui',
    difficulty: 'Facile',
  },
  {

    contenu: 'Qui a composé la bande originale du film ?',
    reponse: 'oui',
    difficulty: 'Moyen',
  },
  {

    contenu: 'Dans quelle contrée a lieu la première bataille du film ?',
    reponse: 'oui',
    difficulty: 'Difficile',
  },
  {

    contenu: 'Comment se prénomme le serviteur de Maximus ?',
    reponse: 'oui',
    difficulty: 'Moyen',
  },
  {

    contenu: 'Quels objets sont enterrés par Juba après la mort de Maximus ?',
    reponse: 'Non',
    difficulty: 'Difficile',
  },
];


function valider(e) {
  e.preventDefault()
}

const QuizzGladiator = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [input_reponse, setInputReponse] = useState("")

  const handleNextQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePreviousQuestion = () => {
    setActiveQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : questions.length - 1
    );
  };

  let ErrorReponse = input_reponse.includes(questions[activeQuestionIndex].reponse)

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
        <input type='text' placeholder='Votre réponse' name='nom_reponse' onChange={(e) => setInputReponse(e.target.value)} />

        {ErrorReponse ?
          <div>
            Bonne réponse
          </div>
          :
          <p>Mauvaise réponse</p>
        }
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePreviousQuestion} style={{ marginRight: '5px' }} variant="contained" color="primary">
          Précédent
        </Button>
        <Button onClick={handleNextQuestion} variant="contained" color="primary">
          Suivant
        </Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/" className='linkStyle'>
          Retour à la liste des films
        </Link>
      </div>
    </div>
  );
};

export default QuizzGladiator;
