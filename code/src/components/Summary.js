import React from 'react';

const Summary = (props) => {
  console.log('display summary');
  return (
    <div className="Summary">
      <p>Summary: {props.summary}</p>
    </div>
  );
}
export default Summary;