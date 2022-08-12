
import {Link, NavLink} from "react-router-dom"
import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"
import { useSearchFilmsQuery } from '../features/movieApi'


export default function NavBar() {
  const [term, setTerm] = useState()
 const {data} = useSearchFilmsQuery(term)
 console.log(data)
 const searchMovies = data.results.map(res => (<Link to={`/movie/${res.id}`}><li style={{border: "1px solid gray", fontSize: "12px", padding: "10px", listStyle: "none"}} key={res.id}>{res.name || res.original_title || res.original_name}</li></Link>))
 
  let activeStyle = {
    color: "red",
    textDecoration: "underline"
  }
  let Styles = {
    color: "white",
    border: "1px solid white",
    marginBottom: "20px",
    marginLeft: "20px"
  }
  
 
  return (
    <div>
        <nav>
          <div className='heading'><h1>Movie app</h1></div>
          <ul>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/"><li>Browse</li></NavLink>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/movies"><li>Movies</li></NavLink>
              <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to="/tvshows"><li>Tv Shows</li></NavLink>
              <li><form><input placeholder='search...' type="text" onChange={e => setTerm(e.target.value)}/><button><FaSearch/></button></form></li>
          </ul>
        </nav>
        <div style={Styles}>
          {term && searchMovies}
        </div>  
    </div>
  )
}

/*
{

     
}
*/