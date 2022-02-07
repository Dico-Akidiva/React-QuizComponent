import React, { Component} from  'react'


class QuizQuestionButton extends Component {
  render () {
    return (

      <li>
      <button>{this.props.button_text}</button>
      </li>

    )
  }
  constructor(props) {
    super(props)
    this.props.quiz_question.answer_options[0]
  }
}

export default QuizQuestionButton
