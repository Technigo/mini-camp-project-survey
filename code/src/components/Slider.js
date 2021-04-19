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
        id="range-slider"
        list="rating-steps"
        className="input-slider"
        value={slider}
        min="1"
        max={Object.keys(data).length}
        step="1"
        onChange={(e) => handleChange(questionID, e.target.value)} />
      <div id="rating-steps">
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
