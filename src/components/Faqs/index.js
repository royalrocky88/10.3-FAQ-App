// Write your code here.

import './index.css'

import FaqsItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="heading-card">FAQs</h1>
        <ul className="ques-card">
          {faqsList.map(eachQuest => (
            <FaqsItem eachQuestion={eachQuest} key={eachQuest.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
