import { createContext,useEffect,useState } from "react";

export const Movie = createContext(null)

export const MovieProvider = ({children}) =>{

  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false)

  const searchMovie = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=214ff540&s=${search || 'naruto'}`);
      const data = await response.json();
      setMovie(data.Search);
      setLoading(true)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    searchMovie()
  },[])

    return(
      <Movie.Provider value={{search,setSearch,movie,setMovie,searchMovie,loading}}>
        {children}
      </Movie.Provider>
    )
}