import React, { useState } from 'react';

import './Radio.css';

const Radio = ({ questionID, data, styleClass, reply, updateReply }) => {
  const [radio, setRadio] = useState(0);
  const handleChange = (label, id) => {
    setRadio(id);
    updateReply([
      ...reply,
      {
        id: questionID,
        value: label
      }
    ]);
  };
  return (
    <div className={`radio-group ${styleClass}`}>
      {data.map((item) => {
        return (
          <label className="radio-label" key={item.answer_id} htmlFor={item.answer_id}>
            <input
              className="input-radio"
              type="radio"
              checked={radio === item.answer_id}
              name={item.name}
              id={item.answer_id}
              onChange={() => handleChange(item.label, item.answer_id)} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default Radio;
