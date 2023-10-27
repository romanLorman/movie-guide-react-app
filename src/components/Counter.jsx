import { useState, useContext } from 'react'
import { CustomContext } from './MovieGuide'
export default function Counter() {
  const { settings, updatePage, slide } = useContext(CustomContext)
  const [num, setNum] = useState(settings.count + 1)

  const handleKey = (e) => {
    const { totalPages, search } = settings
    if (
      e.key === 'Enter' &&
      e.target.value <= totalPages &&
      e.target.value > 0
    ) {
      updatePage(search, e.target.value - 1)
    }
  }

  const { count, totalPages } = settings
  return (
    <div className="get-started__counter">
      <div className="counter">{`page : ${count + 1}/${totalPages}`}</div>
      <button
        onClick={() => setTimeout(slide, 500, -1)}
        className="counter__arrow arrow paginate left"
        data-state={count === 0 ? 'disabled' : ''}
      >
        <i></i>
        <i></i>
      </button>
      <button
        onClick={() => setTimeout(slide, 500, 1)}
        className="counter__arrow arrow paginate right"
        data-state={count === totalPages - 1 ? 'disabled' : ''}
      >
        <i></i>
        <i></i>
      </button>
      <input
        className="counter__input"
        type="number"
        placeholder="page"
        value={num}
        onChange={(e) => setNum(e.target.value.replace(/\+|-/gi, ''))}
        onKeyUp={(e) => handleKey(e)}
      />
    </div>
  )
}
