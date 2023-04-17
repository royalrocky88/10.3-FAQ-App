// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqsItem extends Component {
  state = {isActive: false}

  onChangeBtn = () => {
    this.setState(oldValue => ({
      isActive: !oldValue.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {eachQuestion} = this.props
    const {questionText, answerText} = eachQuestion
    const btnImage = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const imgName = isActive ? 'minus' : 'plus'

    const solution = isActive ? (
      <div className="answer-container">
        <hr className="line-card" />
        <p className="ans-text">{answerText}</p>
      </div>
    ) : (
      ''
    )

    return (
      <li className="list-faq-card">
        <div className="question-container">
          <h1 className="quest-text">{questionText}</h1>
          <button type="button" className="btn-card" onClick={this.onChangeBtn}>
            <img src={btnImage} alt={imgName} className="img-card" />
          </button>
        </div>
        {solution}
      </li>
    )
  }
}

export default FaqsItem
