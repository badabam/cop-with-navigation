import createElement from './createElement'
import './ToggleButton.css'

export default function ToggleButton({
  defaultText,
  activeText,
  onClick,
  target,
}) {
  const el = createElement({
    type: 'button',
    className: 'ToggleButton',
    target,
  })

  let currentText = defaultText
  setCurrentText()

  el.addEventListener('click', handleClick)
  return {}

  function handleClick() {
    onClick && onClick() // es2020: onClick?.()
    currentText = currentText === defaultText ? activeText : defaultText
    setCurrentText()
  }

  function setCurrentText() {
    el.textContent = currentText
  }
}
