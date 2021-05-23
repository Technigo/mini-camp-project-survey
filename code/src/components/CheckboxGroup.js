import React, { useState, useEffect } from 'react';

import './CheckboxGroup.css';

const CheckboxGroup = ({
  questionID,
  data,
  styleClass,
  setReply
}) => {
  const [checkedCheckboxes, setCheckbox] = useState({});
  const handleChange = (e) => {
    setCheckbox(
      {
        ...checkedCheckboxes,
        [e.target.id]:
        e.target.checked
      }
    );
  };
  useEffect(() => {
    setReply(questionID, checkedCheckboxes)
  });
  return (
    <div className={`checkbox-group ${styleClass}`}>
      {data.map((item) => {
        return (
          <label className={`checkbox-label checked-${checkedCheckboxes[item.name]}`} key={item.answer_id} htmlFor={item.name}>
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
export default CheckboxGroup;
