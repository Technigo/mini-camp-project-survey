import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';

import './index.css';

export const App = () => {
  /* eslint-disable no-unused-vars */
  const [replyExperience, updateExperience] = useState([]);
  const [replyWeeks, updateWeeks] = useState([]);
  const [replyFavourite, updateFavourite] = useState([]);
  const [replyImprove, updateImprove] = useState([]);
  const [surveyOver, updateSurveyOver] = useState(false);
  const [currentQuestion, updateCurrentQuestion] = useState(1);
  const questionData = data.questions.filter((item) => item.question_id === currentQuestion);
  const totalQuestions = data.questions.length;
  /* eslint-enable no-unused-vars */
  function storeReply(questionID, reply) {
    if (questionID === 1) {
      updateExperience(reply)
    } else if (questionID === 2) {
      updateWeeks(reply)
    } else if (questionID === 3) {
      updateFavourite(reply)
    } else if (questionID === 4) {
      updateImprove(reply)
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(`Total questions: ${data.questions.length}`);
    updateSurveyOver(true);
  }
  function handleReset() {
    window.location.reload();
  }
  return (
    <div className="App">
      {surveyOver ? (
        <div className="summary">
          <h1>Summary</h1>
          <p>{replyExperience || null}</p>
          <p>{replyWeeks || null}</p>
          <p>{replyFavourite || null}</p>
          {replyImprove.checkboxValues ? (
            Object.keys(replyImprove.checkboxValues).map((item, i) => (
              <span className="checkbox-items" key={i}>{item}</span>
            ))
          ) : (null)}
          <Button
            value="Start Over"
            type="reset"
            name="reset-button"
            styleClass="primary"
            onClick={handleReset} />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {questionData.map((question) => {
            return (
              <Card
                key={question.question_id}
                questionID={question.question_id}
                question={question.question_text}
                questionType={question.question_type}
                answerOptions={question.answer_options}
                styleClass={question.style}
                isRequired={question.isRequired}
                updateReply={storeReply}
                totalQuestions={totalQuestions}
                currentQuestion={currentQuestion}
                updateCurrentQuestion={updateCurrentQuestion} />
            );
          })}
        </form>
      )}
    </div>
  );
}