import React from 'react';

import Button from './Button';
import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';

import './Card.css';

const Card = ({ questionID, question, questionType, answerOptions, styleClass }) => {
  let answers;
  function handleClickButton() {
    console.log(answers);
  }
  if (questionType === 'input') {
    answers = <Input value="" placeholder="Text" type="text" styleClass="primary" />
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
      <div className="answers">
        {answers}
      </div>
      <Button
        value="Next question"
        type="save"
        name="continue-button"
        styleClass="primary"
        handleClickButton={handleClickButton} />
    </div>
  );
};
export default Card;
