import createElement from './createElement'
import './Page.css'

export default function Page({ text, target, hidden = false }) {
  const el = createElement({ type: 'section', className: 'Page', target })
  el.textContent = text

  hidden && hide()

  return { show, hide }

  function show() {
    el.classList.remove('hidden')
  }

  function hide() {
    el.classList.add('hidden')
  }
}
