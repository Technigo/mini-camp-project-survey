import React, { useState } from 'react';

import './Radio.css';

const Radio = (props) => {
  const [radio, setRadio] = useState(0);
  return (
    <div className={`radio-group ${props.styleClass}`}>
      {props.data.answer_option.map((item) => {
        return (
          <label className="radio-label" key={item.answer_id} htmlFor={item.answer_id}>
            <input
              className="input-radio"
              type="radio"
              checked={radio === item.answer_id}
              name={item.name}
              id={item.answer_id}
              onChange={() => setRadio(item.answer_id)} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default Radio;
