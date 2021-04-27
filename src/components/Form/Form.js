import Question from '../Question/Question';
import questions from '../../questions';

import './Form.css'

function Form(props) {

  const onSubmit = (event) => {
    event.preventDefault();
    props.setIsSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit}>
    {questions.map((question, index) => {
      return (
        props.currentStep === index + 1 ? 
        <Question
          key={index}
          /* options={props.options}  */
          stepLength={questions.length} 
          type={question.type}
          short={question.short} 
          options={question.options} 
          title={question.title}
          {...props}/>
        : null
      )
    })}

    </form>
  )
}

export default Form;