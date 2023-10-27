import { useState, useContext, useEffect } from 'react'
import { CustomContext } from './MovieGuide'
import iconOscar from '../img/get-started/oscar-icon.svg'
import Item from './Item'

export default function Collection() {
  const { settings, setSettings} = useContext(CustomContext)
  const [index, setIndex] = useState(0)
  const [view, setView] = useState(false)

  let showMovie = (index) => {
    setIndex(index)
    setView(true)
  }
  
  useEffect (() => {
    let newCollection = settings.collection;
    if(collection.length && view){
      newCollection[index].new = false; 
      setSettings({...settings, collection: newCollection})
      setView(false)
    }
  }, [index,view])

  const { collection } = settings
  let data = collection[index] || collection[index - 1]

  return collection.length ? (
    <>
      <div className="get-started__collection">
        <div className="get-started__movie-info">
          <div className="movie-info__body">
            <img
              className="movie-info__poster"
              src={
                data.Poster != 'N/A'
                  ? data.Poster
                  : `https://placehold.co/400x600?text=${data.Title}`
              }
            />
            <div className="movie-info__content scrollbar">
              <h2 className="movie-info__title">{data.Title}</h2>
              <ul className="movie-info__misc">
                <li className="movie-info__year">
                  <p>
                    <b>Year:</b> <span>{data.Year}</span>
                  </p>
                </li>
                <li className="movie-info__rated">Ratings: {data.Rated}</li>
                <li className="movie-info__released">
                  <p>
                    <b>Released:</b> <span>{'Released'}</span>
                  </p>
                </li>
              </ul>
              <ul className="movie-info__ratings">
                <li className="movie-info__imdb">
                  IMDb {data.Ratings[0] ? data.Ratings[0].Value : 'N/A'}
                </li>
                <li className="movie-info__rotten-tomatoes">
                  RT {data.Ratings[1] ? data.Ratings[1].Value : 'N/A'}
                </li>
                <li className="movie-info__metacritic">
                  MC {data.Ratings[2] ? data.Ratings[2].Value : 'N/A'}
                </li>
              </ul>
              <p className="movie-info__genre">
                <b>Genre:</b> {data.Genre}
              </p>
              <p className="movie-info__country">
                <b>Country:</b> {data.Country}
              </p>
              <p className="movie-info__writer">
                <b>Writer:</b> {data.Writer}
              </p>
              <p className="movie-info__actors">
                <b>Actors: </b> {data.Actors}
              </p>
              <p className="movie-info__plot scrollbar">
                <b>Plot: </b> {data.Plot}
              </p>
              <p className="movie-info__language">
                <b>Language:</b> {data.Language}
              </p>
              <p className="movie-info__awards">
                <img src={iconOscar} alt="oscar-icon" />
                {data.Awards}
              </p>
            </div>
          </div>
        </div>
        <ul className="get-started__movie-list movie-list scrollbar">
          {collection.map((m, i) => (
            <Item showMovie={showMovie} key={m.imdbID} index={i} movie={m} />
          ))}
        </ul>
      </div>
    </>
  ) : (
    <div className="get-started__collection">
      <img src="../img/example" alt="" />
      <h3 className="block-text__title">Collection is empty!</h3>
    </div>
  )
}
