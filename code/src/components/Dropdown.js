import React from 'react';

import './Dropdown.css';

const Dropdown = ({ questionID, data, name, updateReply }) => {
  const handleChange = (e) => {
    console.log(e.target.value)
    updateReply(questionID, e.target.value);
  }
  console.log(data[0].isHidden)
  return (
    <div className={`select-wrapper select-wrapper-${questionID}`}>
      <select
        className="select"
        name={name}
        onChange={handleChange}>
        {data.map((item) => {
          if (item.isDisabled) {
            return (
              <option
                selected
                disabled
                key={item.answer_id}
                value={item.label}>
                {item.label}
              </option>
            );
          } else {
            return (
              <option key={item.answer_id} value={item.label}>{item.label}</option>
            );
          }
        })}
      </select>
    </div>
  );
};
export default Dropdown;