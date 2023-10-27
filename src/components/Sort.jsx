import { Link, useParams } from 'react-router-dom'

export default function Sort() {
  const { sort } = useParams()
  return (
    <form action="#" className="get-started__radio radio">
      <Link to={'/movie-guide-react-app'}>
        <div className="radio__form-check">
          <input
            className="radio__form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            data-type={'all'}
            defaultChecked={sort ? false : true}
          />
          <label
            className="radio__form-check-label"
            htmlFor="flexRadioDefault1"
          >
            All
          </label>
        </div>
      </Link>
      <Link to={'/movie-guide-react-app/movie'}>
        <div className="radio__form-check">
          <input
            className="radio__form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            data-type={'movie'}
            defaultChecked={sort === 'movie' ? true : false}
          />
          <label
            className="radio__form-check-label"
            htmlFor="flexRadioDefault2"
          >
            Movies
          </label>
        </div>
      </Link>
      <Link to={'/movie-guide-react-app/series'}>
        <div className="radio__form-check">
          <input
            className="radio__form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            data-type={'series'}
            defaultChecked={sort === 'series' ? true : false}
          />
          <label
            className="radio__form-check-label"
            htmlFor="flexRadioDefault3"
          >
            Series
          </label>
        </div>
      </Link>
    </form>
  )
}
