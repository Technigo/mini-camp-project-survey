import { useState } from "react";
import Form from './components/Form/Form';
import Result from './components/Result/Result';

import './shakes.css';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gender, setGender] = useState('');
  const [level, setLevel] = useState(3);
  const [mood, setMood] = useState('');

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className={'App level' + level}>
      <h1>Find your <span className="accent">Gen Z</span> streamer name</h1>
      {isSubmitted ? <Result setIsSubmitted={setIsSubmitted} gender={gender} setGender={setGender} level={level} setLevel={setLevel} mood={mood} setMood={setMood} setCurrentStep={setCurrentStep}/> : <Form currentStep={currentStep} setCurrentStep={setCurrentStep} gender={gender} level={level} mood={mood} setMood={setMood} setIsSubmitted={setIsSubmitted} setGender={setGender} setLevel={setLevel} />}
    </div>
  );
}

export default App;
