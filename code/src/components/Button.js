import React from 'react';

import './Button.css';

const Button = ({
  value,
  type,
  name,
  styleClass,
  isDisabled,
  onClick
}) => {
  return (
    <button
      value={value}
      type={type ? 'submit' : 'button'}
      name={name}
      className={`button ${styleClass}`}
      disabled={isDisabled}
      aria-label={name}
      onClick={onClick}>
      {value}
    </button>
  );
};
export default Button;
