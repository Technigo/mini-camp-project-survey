import React from 'react';
import Button from './Button';

const Summary = ({
  data,
  totalQuestions,
  replyCourse,
  replyExperience,
  replyFavourite,
  replyImprove,
  replyImproveDetails,
  replyRating
}) => {
  return (
    <div id={`card-${totalQuestions}`} className="card card-summary inactive">
      <div className="summary-wrapper">
        <h1>Summary</h1>
        <p className="summary-question summary-question-1">
          {data.questions[0].question_id}. {data.questions[0].question_text}
        </p>
        <p className="summary-reply summary-reply-1">
          {replyCourse || null}
        </p>
        <p className="summary-question summary-question-2">
          {data.questions[1].question_id}. {data.questions[1].question_text}
        </p>
        <p className="summary-reply summary-reply-2">
          {replyExperience || null}
        </p>
        <p className="summary-question summary-question-3">
          {data.questions[2].question_id}. {data.questions[2].question_text}
        </p>
        <p className="summary-reply summary-reply-3">
          {replyFavourite || null}
        </p>
        <p className="summary-question summary-question-4">
          {data.questions[3].question_id}. {data.questions[3].question_text}
        </p>
        <span className="summary-reply summary-reply-checkbox summary-reply-4">
          {replyImprove ? (
            Object.keys(replyImprove).filter((k) => replyImprove[k] === true).map((item, i) => (
              <span className="checkbox-items" key={i}>{item}</span>
            ))
          ) : (null)}
        </span>
        <p className="summary-question summary-question-5">
          {data.questions[4].question_id}. {data.questions[4].question_text}
        </p>
        <p className="summary-reply summary-reply-5">
          {replyImproveDetails || null}
        </p>
        <p className="summary-question summary-question-6">
          {data.questions[5].question_id}. {data.questions[5].question_text}
        </p>
        <p className="summary-reply summary-reply-6">
          {replyRating || null}
        </p>
      </div>
      <Button
        value="Start Over"
        type="reset"
        name="reset-button"
        styleClass="primary"
        onClick={() => (window.location.reload())} />
    </div>
  );
};
export default Summary;
