import { Link } from "react-router-dom"
export const TvShow = ({movie}) => {
   return (
       <div>
       
         <Link to={`/tv/${movie.id}`}>
       <div className='card'>
           <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_name}/>
           <h5>{movie.original_name}</h5>
       </div>
       </Link>
       </div>
   )
}