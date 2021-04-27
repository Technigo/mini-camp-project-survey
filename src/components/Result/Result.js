import questions from '../../questions';

import './Result.css';

function Result(props) {


  const resetForm = () => {
    props.setGender('');
    props.setLevel(3);
    props.setMood('');
    props.setIsSubmitted(false);
    props.setCurrentStep(1);
  }

  const genderObject = questions.find(x => x.short === 'gender');
  const experienceObject = questions.find(x => x.short === 'level');
  const moodObject = questions.find(x => x.short === 'mood');

  const genderResult = genderObject.options.find(x => x.value === props.gender);
  const experienceResult = experienceObject.options.find(x => x.value === props.level);
  const moodResult = moodObject.options.find(x => x.value === props.mood);

  return (
    <div className="result">
    <div className="answers">
      <p>Gender: {genderResult.label}</p>
      <p>Gaming Experience: {experienceResult.label}</p>
      <p>Current mood: {moodResult.label}</p>
    </div>
    <p className="final">
      <span className="word">{genderResult.result}</span>
      <span className="word">{experienceResult.result}</span>
      <span className="word">{moodResult.result}</span>
    </p>
    <button onClick={() => resetForm()}>Start over</button>
    </div>
  );
}

export default Result;