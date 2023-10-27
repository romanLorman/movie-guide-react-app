import { MovieGuide } from './components/MovieGuide'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Collection from './components/Collection'
import AboutUs from './layout/AboutUs'
import Movies from './components/Movies'

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/movie-guide-react-app"
          element={
            <MovieGuide>
              <Header />
              <Main />
              <Footer />
            </MovieGuide>
          }
        >
          <Route index element={<Movies />} />
          <Route path="/movie-guide-react-app/:sort" element={<Movies />} />
          <Route
            path="/movie-guide-react-app/collection"
            element={<Collection />}
          />
          <Route path="/movie-guide-react-app/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
