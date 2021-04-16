import React, { useState } from 'react';

import './Textarea.css';

const Textarea = ({
  questionID,
  value,
  isDisabled,
  isRequired,
  updateReply
}) => {
  const [textValue, setTextValue] = useState(value);
  const handleChange = (e) => {
    setTextValue(e.target.value);
    updateReply(questionID, textValue);
  }
  return (
    <textarea
      className="textarea"
      id="textarea"
      name="textarea"
      onChange={handleChange}
      disabled={isDisabled}
      required={isRequired}>
      {value}
    </textarea>
  );
};
export default Textarea;
