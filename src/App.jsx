import React from 'react'
import Search from './components/Search'
import { MovieProvider } from './Context/MovieContext'
import Movies from './components/Movies'

const App = () => {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-gray-900 px-10 py-5">
        <Search />
        <Movies />
      </div>
      </MovieProvider>
  )
}

export default App