import React, { useState } from 'react';

import data from './data.json';
import Card from './components/Card';
import Button from './components/Button';
// import Summary from './components/Summary';

import './index.css';

export const App = () => {
  const [reply, updateReply] = useState([]);
  /* function removeDuplicates(array) {
    console.log('remove duplicates');
    array = new Set(array);
    array.forEach((point) => {
      if (point.id === 1) {
        array.delete(point);
      }
    });
    return array;
  } */
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    console.log(`Total questions: ${data.questions.length}`);
    console.log(reply);
    // console.log(removeDuplicates(reply));
  }
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
              reply={reply}
              updateReply={updateReply} />
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