import createElement from './createElement'
import './Header.css'

export default function Header({ text, target }) {
  const el = createElement({ type: 'header', className: 'Header', target })
  update(text)

  return { update }

  function update(text) {
    el.innerHTML = `
      <em>${text}</em>
    `
  }
}
