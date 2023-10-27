import imgCinema from '../img/get-started/image-cinema.svg'
import iconPlay from '../img/get-started/play-icon.svg'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <>
      <div className="get-started__content">
        <div className="get-started__block-text block-text">
          <h2 className="block-text__title">
            Take care of your pleasant <span>PASTIME</span>
          </h2>
          <div className="block-text__text">
            Currently over 280,000 posters, updated daily. Explore our
            collection and choose your favorite movie.
          </div>
          <Link
            to="/movie-guide-react-app"
            className="block-text__button button"
          >
            get started
          </Link>
        </div>
      </div>

      <div className="get-started__image">
        <img src={imgCinema} alt="image-cinema" />
      </div>
      <div className="get-started__video">
        <a
          href="https://www.youtube.com/watch?v=uzqivetp-1A"
          className="video-get-started"
          target="_blank"
        >
          <div className="video-get-started__icon">
            <img src={iconPlay} alt="icon-play" />
          </div>
          <div className="video-get-started__body">
            <div className="video-get-started__title">
              Stay in touch with MovieGuide
            </div>
            <div className="video-get-started__text">Watch Video</div>
          </div>
        </a>
      </div>
    </>
  )
}
