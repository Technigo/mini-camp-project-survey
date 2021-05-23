import React, { useState } from 'react';

import './Slider.css';

const Slider = ({
  data,
  questionID,
  setReply
}) => {
  const [slider, setSlider] = useState(1);
  const handleChange = (id, value) => {
    setSlider(value);
    setReply(id, value);
  }
  return (
    <>
      <input
        type="range"
        id="range-slider"
        list="rating-steps"
        className="input-slider"
        aria-label="range-slider"
        value={slider}
        min="1"
        max={Object.keys(data).length}
        step="1"
        onChange={(e) => handleChange(questionID, e.target.value)} />
      <div className="rating-steps">
        {data.map((item) => {
          return (
            <a
              href="#"
              className="option"
              key={item.answer_id}
              value={item.label}
              title={item.answer_id}
              onClick={(e) => (handleChange(questionID, e.target.title))}>
                🌟
            </a>
          )
        })}
      </div>
    </>
  );
};
export default Slider;
