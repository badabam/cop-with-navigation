import createElement from './createElement'
import './Header.css'
import starActive from './assets/star-active.svg'

export default function Header({ text, target }) {
  const el = createElement({ type: 'header', className: 'Header', target })
  update(text)

  return { update }

  function update(text) {
    el.innerHTML = `
      ${starActive}
      <em>${text}</em>
    `
  }
}
