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
  /* eslint-disable react/button-has-type */
  return (
    <button
      value={value}
      type={type}
      name={name}
      className={`button ${styleClass}`}
      disabled={isDisabled}
      aria-label={name}
      onClick={onClick}>
      {value}
    </button>
  );
  /* eslint-enable react/button-has-type */
};
export default Button;
