import logo from '../img/header/movie-search-logo.svg'
import Search from '../components/Search'
import Menu from '../components/Menu'

export default function Header() {
  return (
    <header id="menu" className="header">
      <div id="home" className="header__container">
        <a href="/movie-guide-react-app" className="header__logo logo">
          <img src={logo} alt="logo" />
          <h2>
            <span>Movie</span>Guide
          </h2>
        </a>

        <Menu />
        <Search />
      </div>
    </header>
  )
}
