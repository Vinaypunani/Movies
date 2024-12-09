import React,{useContext, useEffect} from 'react'

const MovieCard = ({title,poster,year,type,imdbID}) => {

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-gray-800 m-4">
      <img 
        className="w-full h-64 object-cover bg-gray-700"
        src={poster}
        alt="Movie poster"
        onError={(e) => {
          // e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/400x600?text=Image+Not+Found";
        }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">
          Type: {type}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          IMDB ID : {imdbID}
        </span>
        <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
          Year: {year}
        </span>
      </div>
    </div>
  )
}

export default MovieCard