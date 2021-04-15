import React from 'react';

import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';
import Button from './Button';

import './Card.css';

let answers;

const Card = ({
  questionID,
  question,
  questionType,
  answerOptions,
  styleClass,
  isRequired,
  updateReply,
  totalQuestions,
  currentQuestion,
  updateCurrentQuestion
}) => {
  function handleContinue() {
    updateCurrentQuestion(currentQuestion + 1);
  }
  if (questionType === 'input') {
    answers = <Input
      questionID={questionID}
      value=""
      placeholder=""
      type="text"
      styleClass="primary"
      isRequired={isRequired}
      updateReply={updateReply} />
  } else if (questionType === 'radio') {
    answers = <Radio
      questionID={questionID}
      data={answerOptions}
      styleClass={styleClass}
      isRequired={isRequired}
      updateReply={updateReply} />
  } else if (questionType === 'checkbox') {
    answers = <Checkbox
      questionID={questionID}
      data={answerOptions}
      styleClass={styleClass}
      isRequired={isRequired}
      updateReply={updateReply} />
  }
  return (
    <div id={`card-${questionID}`} className={`card card-question-${questionID} inactive`}>
      <div className="question">
        <div className="question-info">
          <span className="current-questions">{currentQuestion}</span>
          <span className="question-info-divider">/</span>
          <span className="total-questions">{totalQuestions}</span>
        </div>
        <h1>{question}</h1>
      </div>
      <div className="answers">
        {answers}
      </div>
      {(currentQuestion === totalQuestions)
        ? <Button value="Submit" type="submit" name="submit-button" styleClass="primary" />
        : <Button value="Continue" type="continue" name="continue-button" styleClass="primary" onClick={handleContinue} />}
    </div>
  );
};
export default Card;
