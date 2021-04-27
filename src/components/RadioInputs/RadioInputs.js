import { useState } from "react";
import './RadioInputs.css';

function RadioInputs(props) {

   const [isChecked, setIsChecked] = useState(''); 
  
  return (
    <div className="radiogroup">
    {props.options.map((option, index) => {

      const onChanger = (event) => {
        props.setIsAnswered(true);
        setIsChecked(event.target.value);
        if (props.short === 'gender') {
          props.setGender(event.target.value);
        }
        else if (props.short === 'mood') {
          props.setMood(event.target.value);
        }
      }

      return (
        <div className="option" key={index}>
          
          <label className={option.value === isChecked ? "is-checked" : null}>
            <span>{option.label}</span>
            <input onChange={onChanger} required={true} checked={option.value === isChecked} type="radio" name={props.short} value={option.value} />
          </label>
        </div>
      )
    })}
  </div>
  )
}

export default RadioInputs;