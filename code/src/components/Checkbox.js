import React, { useState } from 'react';

import './Checkbox.css';

const Checkbox = ({ questionID, data, styleClass, replyQuestions, updateReply }) => {
  const [checkedCheckboxes, setCheckbox] = useState({});
  const handleChange = (e) => {
    setCheckbox({ ...checkedCheckboxes, [e.target.name]: e.target.checked });
    updateReply([
      ...replyQuestions,
      {
        id: questionID,
        value: e.target.name
      }
    ]);
  };
  return (
    <div className={`checkbox-group ${styleClass}`}>
      {data.map((item) => {
        return (
          <label className="checkbox-label" key={item.answer_id} htmlFor={item.name}>
            <input
              className="input-checkbox"
              type="checkbox"
              checked={checkedCheckboxes[item.name] || false}
              name={item.name}
              id={item.name}
              onChange={handleChange} />
            <span>{item.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default Checkbox;
