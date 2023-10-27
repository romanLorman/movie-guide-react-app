import { useState, useContext } from 'react'
import { CustomContext } from './MovieGuide'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Search() {
  const { settings, handleSearch, sectionRef } = useContext(CustomContext)
  const [search, setSearch] = useState('')
  const { pathname } = useLocation()
  const navigate = useNavigate()

  let startSearch = () => {
    if (
      pathname === '/movie-guide-react-app/collection' ||
      pathname === '/movie-guide-react-app/about'
    ) {
      navigate('/movie-guide-react-app')
    }
    setTimeout(() => (window.location.hash = '#home'))
    handleSearch(search, 0)
    setSearch('')
  }

  let handleKey = (e) => e.key === 'Enter' && startSearch()

  return (
    <div className="header__search search">
      <input
        className={`search__input ${settings.errorFocus}`}
        type="text"
        placeholder="&nbsp;&#128270;&nbsp;search"
        onKeyUp={handleKey}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        ref={sectionRef}
      />
      <div className={`search__no-result ${settings.searchResult}`}>
        No results!
      </div>
      <button
        className="search__button button button-input"
        onClick={() => startSearch()}
      >
        SEARCH
      </button>
      <a href="#menu" className="icon-menu">
        <span></span>
      </a>
      <a href="#home" className="close-icon-menu"></a>
    </div>
  )
}
