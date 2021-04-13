import React, { useState } from 'react';

import './Radio.css';

const Radio = ({
  data,
  styleClass,
  questionID,
  isRequired,
  updateReply
}) => {
  const [radio, setRadio] = useState(0);
  const handleChange = (id, label) => {
    setRadio(id);
    updateReply(questionID, label);
  };
  return (
    <div className={`radio-group ${styleClass} ${isRequired}`}>
      {data.map((item) => {
        return (
          <label className="radio-label" key={item.answer_id} htmlFor={item.answer_id}>
            <input
              className="input-radio"
              type="radio"
              checked={radio === item.answer_id}
              name={item.name}
              id={item.answer_id}
              onChange={() => handleChange(item.answer_id, item.label)} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default Radio;
