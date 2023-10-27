import { useState, useEffect, useRef, createContext } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY, API_URL } from '../config'

export const CustomContext = createContext()

export const MovieGuide = (props) => {
  const sectionRef = useRef()
  const { sort } = useParams()
  const [settings, setSettings] = useState({ ...loadingSettings() })

  function loadingSettings(currentState = false) {
    if (!currentState) {
      if (!JSON.parse(localStorage.getItem('settings'))) {
        return {
          movies: [],
          collection: [],
          search: 'all',
          count: 0,
          totalPages: 0,
          prevSearch: 'all',
          searchResult: 'search__no-result-hidden',
          errorFocus: '',
          request: false,
        }
      } else {
        return JSON.parse(localStorage.getItem('settings'))
      }
    } else {
      localStorage.setItem('settings', JSON.stringify(currentState))
    }
  }

  useEffect(() => {
    handleSearch(settings.search, 0)
  }, [sort])

  useEffect(() => {
    handleSearch()
  }, [])

  const handleSearch = (search = settings.search, count = settings.count) => {
    loadingSettings({ ...settings, search, count })
    searchMovie(search, count + 1)
  }

  const removeItem = (id) => {
    let index = settings.collection.findIndex((m) => m.imdbID === id)
    let collection = [...settings.collection]
    collection.splice(index, 1)
    setSettings({ ...settings, collection })
    loadingSettings({ ...settings, collection })
  }

  const collectionItem = (id) => {
    fetch(`${API_URL}${API_KEY}&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        setSettings({
          ...settings,
          collection: [{ ...data, new: true }, ...settings.collection],
          request: false,
        })
        loadingSettings({
          ...settings,
          collection: [{ ...data, new: true }, ...settings.collection],
        })
      })
  }

  const hideNoResult = () => {
    setSettings({
      ...loadingSettings(),
      searchResult: 'search__no-result-hidden',
    })
    setTimeout(handleSearch, 1000, settings.prevSearch)
  }

  const searchMovie = (search = settings.search, page = settings.count + 1) => {
    setSettings({ ...settings, movies: [] })
    fetch(`${API_URL}${API_KEY}&s=${search}&type=${sort || ''}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          let set = {
            ...loadingSettings(),
            searchResult: 'search__no-result-hidden',
            errorFocus: '',
            prevSearch: search,
            totalPages: Math.ceil(data.totalResults / 10),
            movies: data.Search,
          }
          loadingSettings(set)
          setSettings(set)
        } else {
          setSettings({
            ...settings,
            searchResult: 'search__no-result-opened',
            errorFocus: 'error-focus',
          })
          setTimeout(hideNoResult, 3000)
        }
      })
      .catch((err) => {
        alert(err)
      })
  }

  const toggleMovie = (id) => {
    let index = settings.collection.findIndex((m) => m.imdbID === id)
    if (settings.collection[index]) {
      removeItem(id)
    } else {
      setSettings({ ...settings, request: true })
      if (!settings.request) {
        collectionItem(id)
      }
    }
  }

  const updatePage = (search, num) => {
    loadingSettings({ ...settings, count: num })
    setSettings({ ...settings, count: num })
    searchMovie(search, num + 1)
  }

  const slide = (offset) => {
    let num = Math.min(
      Math.max(settings.count + offset, 0),
      settings.totalPages - 1
    )
    updatePage(settings.search, num)
  }

  const openCard = (id) => {
    fetch(`${API_URL}${API_KEY}&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        setSettings({
          ...settings,
          movies: settings.movies.map((m) => (m.imdbID === id ? data : m)),
        })
      })
  }

  const value = {
    sectionRef,
    settings,
    handleSearch,
    slide,
    openCard,
    toggleMovie,
    removeItem,
    updatePage,
    setSettings,
    loadingSettings,
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
