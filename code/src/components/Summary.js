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
    <div id={`card-${totalQuestions}`} className="summary-wrapper inactive">
      <h1>Summary</h1>
      <div className="card card-summary">
        <p className="summary-question summary-question-1">
          {data.questions[0].question_text}
        </p>
        <p className="summary-reply summary-reply-1">
          {typeof replyCourse !== 'object' ? replyCourse : '-'}
        </p>
      </div>
      <div className="card card-summary">
        <p className="summary-question summary-question-2">
          {data.questions[1].question_text}
        </p>
        <p className="summary-reply summary-reply-2">
          {typeof replyExperience !== 'object' ? replyExperience : '-'}
        </p>
      </div>
      <div className="card card-summary">
        <p className="summary-question summary-question-3">
          {data.questions[2].question_text}
        </p>
        <p className="summary-reply summary-reply-3">
          {typeof replyFavourite !== 'object' ? replyFavourite : '-'}
        </p>
      </div>
      <div className="card card-summary">
        <p className="summary-question summary-question-4">
          {data.questions[3].question_text}
        </p>
        <p className="summary-reply summary-reply-checkbox summary-reply-4">
          {replyImprove ? (
            Object.keys(replyImprove).filter((k) => replyImprove[k] === true).map((item, i) => (
              <span className="checkbox-items" key={i}>{item}</span>
            ))
          ) : (
            '-'
          )}
        </p>
      </div>
      <div className="card card-summary">
        <p className="summary-question summary-question-5">
          {data.questions[4].question_text}
        </p>
        <p className="summary-reply summary-reply-5">
          {typeof replyImproveDetails !== 'object' ? replyImproveDetails : '-'}
        </p>
      </div>
      <div className="card card-summary">
        <p className="summary-question summary-question-6">
          {data.questions[5].question_text}
        </p>
        <p className="summary-reply summary-reply-6">
          {typeof replyRating !== 'object' ? replyRating : '-'}
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
