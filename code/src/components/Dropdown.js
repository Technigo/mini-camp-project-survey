import React from 'react';

import './Dropdown.css';

const Dropdown = ({ questionID, data, setReply }) => {
  const handleChange = (e) => {
    setReply(questionID, e.target.value);
  }
  return (
    <div className={`select-wrapper select-wrapper-${questionID}`}>
      <select
        className="select"
        name={data[0].label}
        onChange={handleChange}
        aria-label={data[0].label}
        defaultValue={data[0].label}>
        {data.map((item) => {
          if (item.isDisabled) {
            return (
              <option
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