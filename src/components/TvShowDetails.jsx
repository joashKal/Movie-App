import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleTvShowQuery } from '../features/movieApi'
export default function TvShowDetails() {
 const {id} = useParams()
  console.log(id)
  const {isLoading, data} = useGetSingleTvShowQuery(id)
  //console.log(data)
  return (
    <div className='movie-details'>
      {
        isLoading ? "Loading...." : 
        <div>
        <h1>{data.original_name}</h1>
        {data.genres.map((gen, index) => <li key={index}>{gen.name}</li>)}
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.original_name}/>
        <h3>{data.release_date}</h3>
        <p>{data.overview}</p>
        </div>
      }
      
    </div>
  )
}
