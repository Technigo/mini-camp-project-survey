import React, { useState } from 'react';

import './Input.css';

const Input = ({ value, type, placeholder, styleClass, isDisabled }) => {
  const [inputValue, setInput] = useState(value);
  const handleChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value);
    // updateReply({ ...replyQuestions, [e.target.name]: e.target.checked });
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
