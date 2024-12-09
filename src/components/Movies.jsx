import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { Movie } from '../Context/MovieContext'

const Movies = () => {

  const {movie,setMovie,loading,} = useContext(Movie)
  
  if (!loading) {
    return (
      <div className="flex justify-center items-center h-1/2">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {movie && movie.length > 0 ? movie.map((item, index) => {
          return (
            <MovieCard 
              key={index}
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
              type={item.Type}
              imdbID={item.imdbID}
            />
          )
        }) : (
          <div className="text-white text-xl ">No movies found</div>
        )}
    </div>
  )
}

export default Movies
