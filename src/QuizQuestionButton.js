import React, { Component} from  'react'


class QuizQuestionButton extends Component {
  handleclick() {
    this.propsclickHandler(button_text)
  }
  render() {
    return (
      <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
    )
  }
}

export default QuizQuestionButton
