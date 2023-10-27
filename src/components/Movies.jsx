import { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CustomContext } from './MovieGuide'
import Movie from './Movie'
import Counter from './Counter'
import Sort from './Sort'
import Loader from '../layout/Loader'

export default function Movies() {
  const { settings, sectionRef } = useContext(CustomContext)
  const location = useLocation()
  useEffect(() => sectionRef.current.focus(), [location])

  return (
      settings.movies.length ? 
      <>
        <Sort />
        <ul className="get-started__cards cards scrollbar scrollbar-cards">
          {settings.movies.map((m) => (
            <Movie key={m.imdbID} data={m} />
          ))}
        </ul>
        <Counter />
      </> : 
      <Loader/>
  )
}
