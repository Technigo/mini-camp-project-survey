import React from 'react';
import Button from './Button';

const Intro = ({ updateShowIntro }) => {
  return (
    <div className="intro">
      <img className="intro-logo" src="assets/technigo-logo.png" width="150" alt="logo" />
      <h1 className="intro-title">Welcome to the Technigo survey!<br />Let&apos;s find out how you rate the course.</h1>
      <Button
        value="Start Survey"
        type="continue"
        name="continue-button"
        styleClass="primary"
        onClick={() => updateShowIntro(false)} />
    </div>
  );
};
export default Intro;
