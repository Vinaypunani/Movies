import React, { useContext } from 'react'
import { Movie } from '../Context/MovieContext'

const Search = () => {

  const {search,setSearch,searchMovie,setLoading} = useContext(Movie) 
  const onSubmit = (e) =>{
    e.preventDefault()
    searchMovie()
    setLoading(false)
  }

  return (
    <form 
    onSubmit={(e) => onSubmit(e)}
    className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <div className="text-2xl font-bold text-white md:mr-8">Movies HUB</div>

        <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search Movies' 
            className="w-72 px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-96"
        />
        <input 
            type="submit" 
            value="Search"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-4"
        />
    </form>
  )
}

export default Search