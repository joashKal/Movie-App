 import { Link } from "react-router-dom"
 export const MovieCard = ({movie}) => {
    return (
        <div>  
        <Link to={`/movie/${movie.id}`} >
        <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title}/>
            <h5>{movie.original_title || movie.original_name}</h5>
        </div>
        </Link> : 
        </div>
    )
}

