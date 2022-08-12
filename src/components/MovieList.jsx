import React, {useState} from 'react'

import { useGetOnlyMoviesQuery } from '../features/movieApi'
import { Movie } from './Movie'
export default function Home() {
  const [pageNumber, setPageNumber] = useState(1)
    const {isLoading, data} = useGetOnlyMoviesQuery(pageNumber)
    //console.log(data)
    const pages = [];
    for(let i=1; i <= 20; i++) {
      pages.push(i)
    }
    const handleClick = (e) => {
      setPageNumber(e.target.id)
    }
  return (
    <div>
      <div className="container">
          {isLoading ? "Loading...." : data.results.map(movie => < Movie key={movie.id} movie={movie} />)}  
      </div>
    {pages.map(num => (<li key={num} className="pages" id={num} onClick={handleClick}>{num}</li>))}
    </div>
  )
}
