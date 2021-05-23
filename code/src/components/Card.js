import React from 'react';

import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import Input from './Input';
import Button from './Button';
import Dropdown from './Dropdown';
import Textarea from './Textarea';
import Slider from './Slider';

import './Card.css';

const Card = ({
  questionID,
  question,
  questionType,
  answerOptions,
  styleClass,
  setReply,
  totalQuestions,
  currentQuestion,
  setCurrentQuestion
}) => {
  function handleContinue() {
    setCurrentQuestion(currentQuestion + 1);
  }
  const generateQuestionControl = () => {
    if (questionType === 'input') {
      return <Input
        questionID={questionID}
        type="text"
        styleClass="primary"
        setReply={setReply} />
    } else if (questionType === 'radio') {
      return <RadioGroup
        questionID={questionID}
        data={answerOptions}
        styleClass={styleClass}
        setReply={setReply} />
    } else if (questionType === 'checkbox') {
      return <CheckboxGroup
        questionID={questionID}
        data={answerOptions}
        styleClass={styleClass}
        setReply={setReply} />
    } else if (questionType === 'dropdown') {
      return <Dropdown
        questionID={questionID}
        data={answerOptions}
        setReply={setReply} />
    } else if (questionType === 'textarea') {
      return <Textarea
        questionID={questionID}
        setReply={setReply} />
    } else if (questionType === 'slider') {
      return <Slider
        questionID={questionID}
        data={answerOptions}
        setReply={setReply} />
    }
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
        {generateQuestionControl()}
      </div>
      {(currentQuestion === totalQuestions)
        ? <Button value="Submit" type="submit" name="submit-button" styleClass="primary" aria-label="submit" />
        : <Button value="Continue" name="continue-button" styleClass="primary" aria-label="continue" onClick={handleContinue} />}
    </div>
  );
};
export default Card;
