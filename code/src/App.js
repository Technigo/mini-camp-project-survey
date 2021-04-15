import React, { useEffect, useState } from 'react';

import data from './data.json';
// import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';

import './index.css';

export const App = () => {
  const [replyExperience, updateExperience] = useState([]);
  const [replyWeeks, updateWeeks] = useState([]);
  const [replyFavourite, updateFavourite] = useState([]);
  const [replyImprove, updateImprove] = useState([]);
  const [showIntro, updateShowIntro] = useState(true);
  const [surveyOver, updateSurveyOver] = useState(false);
  const [currentQuestion, updateCurrentQuestion] = useState(1);
  const questionData = data.questions.filter((item) => item.question_id === currentQuestion);
  const totalQuestions = data.questions.length;
  function storeReply(questionID, reply) {
    if (questionID === 1) {
      updateExperience(reply)
    } else if (questionID === 2) {
      updateWeeks(reply)
    } else if (questionID === 3) {
      updateFavourite(reply)
    } else if (questionID === 4) {
      updateImprove(reply)
    }
  }
  useEffect(() => {
    if (!showIntro) {
      if (currentQuestion <= totalQuestions) {
        document.getElementById(`card-${currentQuestion}`).classList.remove('inactive');
      } else {
        document.getElementById(`card-${totalQuestions + 1}`).classList.remove('inactive');
      }
    }
  });
  function handleSubmit(e) {
    e.preventDefault();
    updateSurveyOver(true);
  }
  return (
    <div className="App">
      {/* <Header totalSteps={totalQuestions} /> */}
      {!showIntro ? (
        <img className="survey-logo" src="assets/technigo-logo.png" width="100" alt="logo" />
      ) : (
        null
      )}
      <section className="survey">
        {surveyOver ? (
          <div id={`card-${totalQuestions}`} className="card card-summary inactive">
            <div className="summary-wrapper">
              <h1>Summary</h1>
              <p className="summary-question summary-question-1">
                {data.questions[0].question_id}. {data.questions[0].question_text}
              </p>
              <p className="summary-reply summary-reply-1">
                {replyExperience || null}
              </p>
              <p className="summary-question summary-question-2">
                {data.questions[1].question_id}. {data.questions[1].question_text}
              </p>
              <p className="summary-reply summary-reply-2">
                {replyWeeks || null}
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
                {replyImprove.checkboxValues ? (
                  Object.keys(replyImprove.checkboxValues).map((item, i) => (
                    <span className="checkbox-items" key={i}>{item}</span>
                  ))
                ) : (null)}
              </span>
            </div>
            <Button
              value="Start Over"
              type="reset"
              name="reset-button"
              styleClass="primary"
              onClick={() => (window.location.reload())} />
          </div>
        ) : (
          <>
            {showIntro ? (
              <div className="intro">
                <img className="intro-logo" src="assets/technigo-logo.png" width="100" alt="logo" />
                <h1 className="intro-title">Welcome to the Technigo survey!<br />Let&apos;s find out how you rate your course.</h1>
                <Button
                  value="Start Survey"
                  type="continue"
                  name="continue-button"
                  styleClass="primary"
                  onClick={() => updateShowIntro(false)} />
              </div>
            ) : (
              <>
                <form className="form" onSubmit={handleSubmit}>
                  {questionData.map((question) => {
                    return (
                      <Card
                        key={question.question_id}
                        questionID={question.question_id}
                        question={question.question_text}
                        questionType={question.question_type}
                        answerOptions={question.answer_options}
                        styleClass={question.style}
                        isRequired={question.isRequired}
                        updateReply={storeReply}
                        totalQuestions={totalQuestions}
                        currentQuestion={currentQuestion}
                        updateCurrentQuestion={updateCurrentQuestion} />
                    );
                  })}
                </form>
              </>
            )}
            <div className="circle circle-3" />
          </>
        )}
      </section>
      <div className="circle-inner">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-4" />
      </div>
      <div className="circle-outer">
        <div className="circle circle-5" />
        <div className="circle circle-6" />
        <div className="circle circle-7" />
        <div className="circle circle-8" />
      </div>
    </div>
  );
}