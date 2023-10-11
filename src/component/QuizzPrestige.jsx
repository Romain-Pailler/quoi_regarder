import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const questions = [
  {
    
    contenu:'Qui est le réalisateur du film ?',
    difficulty: 'Facile',
  },
  {
    
    contenu:'Quel acteur jouant dans le prestige est présent dans le plus de films de son réalisateur ?',
    difficulty: 'Moyen',
  },
  {
    
    contenu:"Quel objet Alfred Borden (Bale) utilise t'il lorsqu'il cherche à détourner l'attention ?",
    difficulty: 'Difficile',
  },
  {
    
    contenu:"Pour quel tour de magie les 2 magiciens se battent t'ils ?",
    difficulty: 'Moyen',
  },
  {
    
    contenu:'Quel grand scientifique fabrique une machine pour Robert ?',
    difficulty: 'Difficile',
  },
];

const QuizzPrestige = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

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

  return (
    <div style={{ height: '100vh', margin:'80px auto 30px auto'}}>
      <Typography variant="h4" align="center" gutterBottom>
        Question {activeQuestionIndex + 1}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Niveau de difficulté : {questions[activeQuestionIndex].difficulty}
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        {questions[activeQuestionIndex].contenu}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePreviousQuestion} style={{ marginRight:'5px' }} variant="contained" color="primary">
          Précédent
        </Button>
        <Button onClick={handleNextQuestion} variant="contained" color="primary">
          Suivant
        </Button>
      </div>
      <div style={{ textAlign:'center',marginTop:'10px'}}>
      <Link to="/" className='linkStyle'>
        Retour à la liste des films
      </Link>
      </div>
    </div>
  );
};

export default QuizzPrestige;
