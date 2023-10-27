import { useState, useEffect, useContext } from 'react'
import { CustomContext } from './MovieGuide'
import iconOscar from '../img/get-started/oscar-icon.svg'

export default function Movie({ data }) {
  const { settings, openCard, toggleMovie } = useContext(CustomContext)
  const [state, setState] = useState({ des: '', background: '', marker: '' })

  useEffect(() => {
    settings.collection.find((m) => m.imdbID === data.imdbID)
      ? setState({ ...state, marker: 'marker_is-added' })
      : setState({ ...state, marker: '' })
  }, [])

  const rating = (index) =>
    data.Ratings && data.Ratings.length > index
      ? data.Ratings[index].Value
      : 'N/A'

  const preloader = () => <div className="card__preloader"></div>

  const toggleClass = () => {
    if (!data.Ratings || !state.des) {
      openCard(data.imdbID)
      setState({
        ...state,
        des: ' card__description_open',
        background: ' card__background-img_open',
      })
    } else {
      setState({ ...state, des: '', background: '' })
    }
  }

  const toggleMarker = () => {
    !state.marker
      ? setState({ ...state, marker: 'marker_is-added' })
      : setState({ ...state, marker: '' })
  }

  const handleCard = (e) =>
    e.target.dataset.type == 'marker' ? toggleMarker() : toggleClass()

  const {
    Ratings,
    Poster,
    Title,
    Type,
    Year,
    Rated,
    Genre,
    Released,
    Country,
    Writer,
    Actors,
    Plot,
    Language,
    Awards,
  } = data
  const { des, background, marker } = state
  return (
    <li
      className="get-started__card card"
      data-type="card"
      onClick={(e) => handleCard(e)}
    >
      <div className="card__body">
        {des && !Ratings ? preloader() : ''}
        <img
          className={`card__background-img${Ratings ? background : ''}`}
          src={
            Poster != 'N/A'
              ? Poster
              : `https://placehold.co/400x600?text=${Title}`
          }
        />
        <div className={`card__description${Ratings ? des : ''}`}>
          <div className="movie-info scrollbar">
            <h2 className="movie-info__title">{Title}</h2>
            <ul className="movie-info__misc">
              <li className="movie-info__year">
                <p>
                  <b>Year:</b> <span>{Year}</span>
                </p>
              </li>
              <li className="movie-info__rated">Ratings: {Rated}</li>
              <li className="movie-info__released">
                <p>
                  <b>Released:</b> <span>{Released}</span>
                </p>
              </li>
            </ul>
            <ul className="movie-info__ratings">
              <li className="movie-info__imdb">IMDb {rating(0)}</li>
              <li className="movie-info__rotten-tomatoes">RT {rating(1)}</li>
              <li className="movie-info__metacritic">MC {rating(2)}</li>
            </ul>
            <p className="movie-info__genre">
              <b>Genre:</b> {Genre}
            </p>
            <p className="movie-info__country">
              <b>Country:</b> {Country}
            </p>
            <p className="movie-info__writer">
              <b>Writer:</b> {Writer}
            </p>
            <p className="movie-info__actors">
              <b>Actors: </b> {Actors}
            </p>
            <p className="movie-info__plot">
              <b>Plot: </b> {Plot}
            </p>
            <p className="movie-info__language">
              <b>Language:</b> {Language}
            </p>
            <p className="movie-info__awards">
              <img src={iconOscar} alt="oscar-icon" />
              {Awards}
            </p>
          </div>
        </div>
        <div className="card__title-card">
          <h3 className="title-overflow">{Title}</h3>
          <p>
            <span>{Year}</span>
            <span>{Type}</span>
          </p>
        </div>
        <button
          data-type="marker"
          className={`card__marker tooltip ${marker}`}
          onClick={(e) => {
            toggleMovie(data.imdbID)
            handleCard(e)
          }}
        >
          {settings.collection.find((m) => m.imdbID === data.imdbID) ? (
            <span id='warning' className="tooltiptext tooltip-top warning">
              Remove from collection!
            </span>
          ) : (
            <span className="tooltiptext tooltip-top">Add to collection!</span>
          )}
          +
        </button>
      </div>
    </li>
  )
}
