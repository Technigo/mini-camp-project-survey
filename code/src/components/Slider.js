import React, { useState } from 'react';

import './Slider.css';

const Slider = ({
  data,
  questionID,
  updateReply
}) => {
  const [slider, setSlider] = useState(0);
  const handleChange = (id, value) => {
    setSlider(value);
    updateReply(id, value);
  }
  return (
    <>
      <input
        type="range"
        list="rating-steps"
        className="input-slider"
        value={slider}
        min="1"
        max={Object.keys(data).length}
        step="1"
        onChange={(e) => handleChange(questionID, e.target.value)} />
      <datalist id="rating-steps">
        {data.map((item) => {
          return (
            <option key={item.answer_id} value={item.label}>🌟</option>
          )
        })}
      </datalist>
    </>
  );
};
export default Slider;
