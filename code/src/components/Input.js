import React, { useState } from 'react';

import './Input.css';

const Input = ({
  questionID,
  value,
  type,
  placeholder,
  styleClass,
  isDisabled,
  updateReply,
  reply
}) => {
  const [inputValue, setInput] = useState(value);
  const handleChange = (e) => {
    setInput(e.target.value);
    updateReply([
      ...reply,
      {
        id: questionID,
        value: e.target.value
      }
    ]);
  }
  return (
    <input
      type={type}
      className={`input ${styleClass}`}
      value={inputValue}
      placeholder={placeholder}
      onChange={handleChange}
      disabled={isDisabled} />
  );
};
export default Input;
