import React from 'react';

import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';

import './Card.css';

let answers;

const Card = ({
  questionID,
  question,
  questionType,
  answerOptions,
  styleClass,
  updateReply
}) => {
  if (questionType === 'input') {
    answers = <Input
      questionID={questionID}
      value=""
      placeholder="Text"
      type="text"
      styleClass="primary"
      updateReply={updateReply} />
  } else if (questionType === 'radio') {
    answers = <Radio
      questionID={questionID}
      data={answerOptions}
      styleClass={styleClass}
      updateReply={updateReply} />
  } else if (questionType === 'checkbox') {
    answers = <Checkbox
      questionID={questionID}
      data={answerOptions}
      styleClass={styleClass}
      updateReply={updateReply} />
  }
  return (
    <div className={`card card-question-${questionID}`}>
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="answers">
        {answers}
      </div>
    </div>
  );
};
export default Card;
