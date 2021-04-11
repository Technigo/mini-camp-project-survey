import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';

import './index.css';

export const App = () => {
  /* eslint-disable no-unused-vars */
  const [currentQuestion, setQuestion] = useState(0);
  /* eslint-enable no-unused-vars */
  console.log(currentQuestion)

  return (
    <div className="App">
      {data.questions.question.map((question) => {
        return (
          <Card
            key={question.question_id}
            questionID={question.question_id}
            question={question.question_text}
            questionType={question.question_type}
            answerOptions={question.answer_options}
            styleClass={question.style} />
        );
      })}
    </div>
  );
}