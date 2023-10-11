import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const questions = [
  {
    question: 'Question 1',
    contenu:'',
    difficulty: 'Facile',
  },
  {
    question: 'Question 2',
    contenu:'',
    difficulty: 'Moyen',
  },
  {
    question: 'Question 3',
    contenu:'',
    difficulty: 'Difficile',
  },
  {
    question: 'Question 4',
    contenu:'',
    difficulty: 'Moyen',
  },
  {
    question: 'Question 5',
    contenu:'',
    difficulty: 'Difficile',
  },
];

const QuizzGladiator = () => {
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
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Question {activeQuestionIndex + 1}
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Niveau de difficulté : {questions[activeQuestionIndex].difficulty}
      </Typography>
      <Typography variant="body1" align="center">
        {questions[activeQuestionIndex].question}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handlePreviousQuestion} variant="contained" color="primary">
          Précédent
        </Button>
        <Button onClick={handleNextQuestion} variant="contained" color="primary">
          Suivant
        </Button>
      </div>
    </div>
  );
};

export default QuizzGladiator;
