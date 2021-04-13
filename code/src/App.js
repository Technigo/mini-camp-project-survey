import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';
// import Summary from './components/Summary';

import './index.css';

export const App = () => {
  // const [reply, updateReply] = useState([]);
  /* eslint-disable no-unused-vars */
  const [replyExperience, updateExperience] = useState([]);
  const [replyWeeks, updateWeeks] = useState([]);
  const [replyFavourite, updateFavourite] = useState([]);
  const [replyImprove, updateImprove] = useState([]);
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
    console.log(reply);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(`Total questions: ${data.questions.length}`);
    // console.log(reply);
    // console.log(removeDuplicates(reply));
  }
  console.log(`update${data.questions[0].question_shortname}`);
  return (
    <div className="App">
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
              updateReply={(reply) => storeReply(question.question_id, reply)} />
          );
        })}
        <Button
          value="Submit"
          type="submit"
          name="continue-button"
          styleClass="primary" />
      </form>
    </div>
  );
}