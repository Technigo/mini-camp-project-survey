import React, { useEffect, useState } from 'react';

import data from './data.json';
import Intro from './components/Intro';
import Summary from './components/Summary';
import Card from './components/Card';
import Logo from './components/Logo';
import Circles from './components/Circles';

import './index.css';

export const App = () => {
  const [replyCourse, setCourse] = useState('');
  const [replyExperience, setExperience] = useState('');
  const [replyFavourite, setFavourite] = useState('');
  const [replyImprove, setImprove] = useState([]);
  const [replyImproveDetails, setImproveDetails] = useState('');
  const [replyRating, setRating] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [surveyOver, setSurveyOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const questionData = data.questions.find((item) => item.question_id === currentQuestion);
  const totalQuestions = data.questions.length;
  const storeReply = (questionID, reply) => {
    if (questionID === 1) {
      setCourse(reply)
    } else if (questionID === 2) {
      setExperience(reply)
    } else if (questionID === 3) {
      setFavourite(reply)
    } else if (questionID === 4) {
      setImprove(reply)
    } else if (questionID === 5) {
      setImproveDetails(reply)
    } else if (questionID === 6) {
      setRating(reply)
    }
  }
  useEffect(() => {
    if (!showIntro) document.getElementById(`card-${currentQuestion}`).classList.remove('inactive');
  });
  function handleSubmit(e) {
    e.preventDefault();
    setSurveyOver(true);
  }
  function handleReset() {
    setSurveyOver(false);
    setCurrentQuestion(1);
    setCourse([]);
    setExperience([]);
    setFavourite([]);
    setImprove([]);
    setImproveDetails([]);
    setRating(1);
  }
  return (
    <div className="App">
      {!showIntro && <Logo />}
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
            replyRating={replyRating}
            handleReset={handleReset} />
        ) : (
          <>
            {showIntro ? (
              <Intro setShowIntro={setShowIntro} />
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <Card
                  key={questionData.question_id}
                  questionID={questionData.question_id}
                  question={questionData.question_text}
                  questionType={questionData.question_type}
                  answerOptions={questionData.answer_options}
                  styleClass={questionData.style}
                  setReply={storeReply}
                  totalQuestions={totalQuestions}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion} />
              </form>
            )}
          </>
        )}
      </section>
      <Circles />
    </div>
  );
}