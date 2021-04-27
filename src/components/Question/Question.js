import { useState } from "react";

import RadioInputs from '../RadioInputs/RadioInputs';
import RangeInput from '../RangeInput/RangeInput';

import './Question.css'

function Question(props) {

  const [isAnswered, setIsAnswered] = useState(false);

  const onNext = (event) => {
    event.preventDefault();
    props.setCurrentStep(props.currentStep + 1);
  }

  return (
    <div className="question">
      <h2 className="question-title">{props.title}</h2>
      {props.type === "radio" ? 
        <RadioInputs isAnswered={isAnswered} setIsAnswered={setIsAnswered} {...props} /> 
      : props.type === "slider" ? 
        <RangeInput isAnswered={isAnswered} setIsAnswered={setIsAnswered} {...props}/> 
      : null
      }
      {props.currentStep < props.stepLength ? 
        <button disabled={!isAnswered && props.type === 'radio'} onClick={onNext}>Next →</button> 
        : <input type="submit" disabled={!isAnswered} value="Submit"></input>}
    </div>
  )
}

export default Question;