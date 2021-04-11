import React, { useState } from 'react';

import './Input.css';

const Input = ({ value, type, placeholder, styleClass, isDisabled }) => {
  const [inputValue, setInput] = useState(value);
  return (
    <input
      type={type}
      className={`input ${styleClass}`}
      value={inputValue}
      placeholder={placeholder}
      onChange={(e) => setInput(e.target.value)}
      disabled={isDisabled} />
  );
};
export default Input;
