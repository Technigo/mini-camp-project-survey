import React, { useEffect, useState } from 'react';

import data from './data.json';
import Intro from './components/Intro';
import Summary from './components/Summary';
import Card from './components/Card';

import './index.css';

export const App = () => {
  const [replyCourse, updateCourse] = useState([]);
  const [replyExperience, updateExperience] = useState([]);
  const [replyFavourite, updateFavourite] = useState([]);
  const [replyImprove, updateImprove] = useState([]);
  const [replyImproveDetails, updateImproveDetails] = useState([]);
  const [replyRating, updateRating] = useState([]);
  const [showIntro, updateShowIntro] = useState(true);
  const [surveyOver, updateSurveyOver] = useState(false);
  const [currentQuestion, updateCurrentQuestion] = useState(1);
  const questionData = data.questions.filter((item) => item.question_id === currentQuestion);
  const totalQuestions = data.questions.length;
  function storeReply(questionID, reply) {
    if (questionID === 1) {
      updateCourse(reply)
    } else if (questionID === 2) {
      updateExperience(reply)
    } else if (questionID === 3) {
      updateFavourite(reply)
    } else if (questionID === 4) {
      updateImprove(reply)
    } else if (questionID === 5) {
      updateImproveDetails(reply)
    } else if (questionID === 6) {
      updateRating(reply)
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
      {!showIntro ? (
        <img className="survey-logo" src="assets/technigo-logo.png" width="100" alt="logo" />
      ) : (
        null
      )}
      <section className="survey">
        {surveyOver ? (
          <Summary
            data={data}
            totalQuestions={totalQuestions}
            replyCourse={replyCourse}
            replyExperience={replyExperience}
            replyFavourite={replyFavourite}
            replyImprove={replyImprove}
            replyImproveDetails={replyImproveDetails}
            replyRating={replyRating} />
        ) : (
          <>
            {showIntro ? (
              <Intro updateShowIntro={updateShowIntro} />
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
          </>
        )}
        <div className="circle circle-3" />
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
        <div className="circle circle-9" />
        <div className="circle circle-10" />
      </div>
    </div>
  );
}