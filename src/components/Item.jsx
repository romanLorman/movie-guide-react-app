import { useContext } from 'react'
import { CustomContext } from './MovieGuide'
import noPoster from '../img/get-started/noPoster.jpg'
export default function Item({ movie, showMovie, index }) {
  const { removeItem } = useContext(CustomContext)
  const { Poster, Year, Type, Title} = movie
  return (
    <li className="movie-list__item" onClick={() => {showMovie(index)}}>
      {movie.new ? <div className='movie-list__marker'><span>NEW</span></div> : ''}
      <img
        className="movie-list__poster"
        src={Poster != 'N/A' ? Poster : noPoster}
      />
      <div className="movie-list__data">
        <div className="movie-list__title">
          <span className="title-overflow title-overflow_2_lines">{Title}</span>
          <a
            className="movie-list__close-icon"
            data-type="removeBtn"
            onClick={(e) => {
              if (e.target.dataset.type === 'removeBtn') {
                removeItem(movie.imdbID)
              }
            }}
          >
            <span></span>
          </a>
        </div>
        <div className="movie-list__misc">
          <div className="movie-list__year">{Year}</div>
          <div className="movie-list__type">{Type}</div>
        </div>
      </div>
    </li>
  )
}
