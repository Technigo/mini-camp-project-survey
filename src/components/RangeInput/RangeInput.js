import questions from '../../questions';
import { useState } from "react";

import './RangeInput.css';

function RangeInput(props) {

  const [currentLabel, setCurrentLabel] = useState(questions[1].options[3].label); 

  const onChanger = (event) => {
    props.setLevel(parseInt(event.target.value)); 
    setCurrentLabel(questions[1].options[event.target.value].label);
  }

  return (
    <div className="range-slider">
      <p className="label shake-constant">{currentLabel}</p>
      <input onChange={onChanger} name={props.short} type="range" min="0" defaultValue="3" max="5" className="slider rangeslider"  />
    </div>
  )
}

export default RangeInput;