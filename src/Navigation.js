import createElement from './createElement'
import './Navigation.css'

export default function Navigation({ target, onNavigate, routes }) {
  const el = createElement({ type: 'nav', className: 'Navigation', target })

  routes.forEach((route) => {
    const btn = createElement({ type: 'button', target: el })
    btn.textContent = route.title
    btn.addEventListener('click', () => onNavigate(route.path))
  })

  return {}
}
