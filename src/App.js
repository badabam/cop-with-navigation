import './App.css'
import createElement from './createElement'
import Header from './Header'
import Navigation from './Navigation'
import Page from './Page'

export default function App({ target }) {
  const el = createElement({ className: 'App', target })
  const header = Header({ text: 'Hello world', target: el })

  const routes = [
    {
      path: '/',
      component: Page({ target: el, text: 'home', hidden: false }),
      title: 'Home',
    },
    {
      path: '/bookmarks',
      component: Page({ target: el, text: 'bookmarks', hidden: true }),
      title: 'Bookmarks',
    },
    {
      path: '/create',
      component: Page({ target: el, text: 'create', hidden: true }),
      title: 'Create',
    },
    {
      path: '/profile',
      component: Page({ target: el, text: 'profile', hidden: true }),
      title: 'Profile',
    },
  ]

  Navigation({ target: el, onNavigate: handleNavigate, routes })

  function handleNavigate(path) {
    const newRoute = routes.find((route) => route.path === path)
    header.update(newRoute.title)
    routes.forEach((route) =>
      route === newRoute ? route.component.show() : route.component.hide()
    )
  }
}
