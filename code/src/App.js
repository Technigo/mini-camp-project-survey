import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';

import './index.css';

export const App = () => {
  const [currentQuestion, updateQuestion] = useState(
    data.questions.question.filter((item) => item.question_id === 1)
  );
  const [replyQuestions, updateReplyQuestions] = useState([]);

  console.log(replyQuestions);

  return (
    <div className="App">
      {currentQuestion.map((question) => {
        return (
          <Card
            key={question.question_id}
            questionID={question.question_id}
            question={question.question_text}
            questionType={question.question_type}
            answerOptions={question.answer_options}
            styleClass={question.style}
            replyQuestions={replyQuestions}
            updateQuestion={updateQuestion}
            updateReply={updateReplyQuestions} />
        );
      })}
    </div>
  );
}