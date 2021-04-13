import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';
// import Summary from './components/Summary';

import './index.css';

export const App = () => {
  /* eslint-disable no-unused-vars */
  const [replyExperience, updateExperience] = useState([]);
  const [replyWeeks, updateWeeks] = useState([]);
  const [replyFavourite, updateFavourite] = useState([]);
  const [replyImprove, updateImprove] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [survayOver, updateSurvayOver] = useState(false);
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
      // console.log(Object.keys(reply.checkboxValues))
    }
    // console.log(`Reply Quesion ${questionID}:`);
    // console.log(reply);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(`Total questions: ${data.questions.length}`);
    updateSurvayOver(true);
  }
  function handleReset() {
    window.location.reload();
  }
  return (
    <div className="App">
      {survayOver ? (
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
            handleClickButton={handleReset} />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {data.questions.map((question) => {
            return (
              <Card
                key={question.question_id}
                questionID={question.question_id}
                question={question.question_text}
                questionType={question.question_type}
                answerOptions={question.answer_options}
                styleClass={question.style}
                isRequired={question.isRequired}
                updateReply={storeReply} />
            );
          })}
          <Button
            value="Submit"
            type="submit"
            name="continue-button"
            styleClass="primary" />
        </form>
      )}
    </div>
  );
}