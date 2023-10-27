import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CustomContext } from './MovieGuide'

export default function Menu() {
  const { settings } = useContext(CustomContext)
  const { sort } = useParams()
  const count = settings.collection.filter((m) => m.new).length

  return (
    <div className="header__menu menu">
      <nav className="menu__body">
        <div className="menu__list">
          <NavLink
            to={`/movie-guide-react-app/${sort || ''}`}
            className="menu__item menu__link "
            onClick={() => setTimeout(() => (window.location.hash = '#home'))}
          >
            discover
          </NavLink>
          <NavLink
            to="/movie-guide-react-app/collection"
            className="menu__item menu__link"
            onClick={() => setTimeout(() => (window.location.hash = '#home'))}
          >
            {count ? (
              <div className="menu__marker">
                <span>new {count}</span>
              </div>
            ) : (
              ''
            )}
            collection
          </NavLink>
          <NavLink
            to="/movie-guide-react-app/about"
            className="menu__item menu__link"
            onClick={() => setTimeout(() => (window.location.hash = '#home'))}
          >
            about us
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
