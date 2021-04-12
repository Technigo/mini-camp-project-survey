import React, { useState } from 'react';

import data from '../data.json';
import Button from './Button';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';

import './Card.css';

let questionId = 1;
let nextQuestion = data.questions.question.filter((item) => item.question_id === questionId + 1);
let answers;

const Card = ({
  questionID,
  question,
  questionType,
  answerOptions,
  styleClass,
  replyQuestions,
  updateQuestion,
  updateReply
}) => {
  const [replyQuestion1, updateReplyQuestion1] = useState('');
  console.log(updateReplyQuestion1);
  function handleClickButton(e) {
    console.log(e.target);
    updateReply([
      ...replyQuestions,
      {
        id: questionId,
        answer: replyQuestion1
      }
    ]);
    updateQuestion(nextQuestion);
    questionId += 1;
    nextQuestion = data.questions.question.filter((item) => item.question_id === questionId + 1);
  }
  function handleSubmit() {
    console.log('submit');
  }

  if (questionType === 'input') {
    answers = <Input value={replyQuestion1} placeholder="Text" type="text" styleClass="primary" />
  } else if (questionType === 'radio') {
    answers = <Radio data={answerOptions} styleClass={styleClass} />
  } else if (questionType === 'checkbox') {
    answers = <Checkbox data={answerOptions} styleClass={styleClass} />
  }
  return (
    <div className={`card card-question-${questionID}`}>
      <div className="question">
        <p>{question}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="answers">
          {answers}
        </div>
        <Button
          value="Next question"
          type="submit"
          name="continue-button"
          styleClass="primary"
          handleClickButton={handleClickButton} />
      </form>
    </div>
  );
};
export default Card;
