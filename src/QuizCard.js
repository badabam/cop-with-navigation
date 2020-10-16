import createElement from './createElement'
import './QuizCard.css'

export default function QuizCard({ question, answer, target }) {
  const el = createElement({ type: 'section', className: 'QuizCard', target })

  const questionEl = createElement({ type: 'p', target: el })
  questionEl.textContent = question

  const answerEl = createElement({ type: 'p', target: el, className: 'hidden' })
  answerEl.textContent = answer

  return {
    showAnswer,
    hideAnswer,
  }

  function showAnswer() {
    answerEl.classList.remove('hidden')
  }

  function hideAnswer() {
    answerEl.classList.add('hidden')
  }
}
