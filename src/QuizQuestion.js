import React, {Component} from 'react'

class QuizQuestion extends Component {
  render () {
    return (
      <main>
     <section>
       <p>{this.props.quiz_question.instruction_text}</p>
     </section>
     <section className="buttons">
       <ul>
         <li><QuizQuestionButton /></li>
       </ul>
     </section>
   </main>
 )
  }
  constructor(props) {
    super(props)
  }
}

export default QuizQuestion