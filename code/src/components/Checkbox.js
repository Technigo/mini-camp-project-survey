import React, { useState } from 'react';

import './Checkbox.css';

const Checkbox = (props) => {
  const [checkedCheckboxes, setCheckbox] = useState({});
  const handleChange = (e) => {
    setCheckbox({ ...checkedCheckboxes, [e.target.name]: e.target.checked });
  };
  return (
    <div className={`checkbox-group ${props.styleClass}`}>
      {props.data.answer_option.map((item) => {
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
