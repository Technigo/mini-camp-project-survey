import React, { useState } from 'react';

import './Textarea.css';

const Textarea = ({
  questionID,
  value,
  isDisabled,
  updateReply
}) => {
  const [textValue, setTextValue] = useState(value);
  const handleChange = (e) => {
    setTextValue(e.target.value);
    updateReply(questionID, e.target.value);
  }
  return (
    <textarea
      value={textValue}
      className="textarea"
      id="textarea"
      name="textarea"
      aria-label="textarea"
      onChange={handleChange}
      disabled={isDisabled} />
  );
};
export default Textarea;
