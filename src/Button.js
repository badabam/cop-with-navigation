import createElement from './createElement'
import './Button.css'

export default function Button({ text, onClick, target }) {
  const el = createElement({
    type: 'button',
    className: 'Button',
    target: target,
  })
  update(text)
  el.addEventListener('click', onClick)
  return { update }

  function update(text) {
    el.textContent = text
  }
}
