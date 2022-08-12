import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"
import { useSearchFilmsQuery } from '../features/movieApi'
export default function Search() {
    const [term, setTerm] = useState()
    console.log(term)
    const {data} = useSearchFilmsQuery(term)
    console.log(data)
   //const handleClick = (e) => {
     //e.preventDefault()
     //console.log(term)
   //}
  return (
    <div>
        <form><input placeholder='search...' type="text" onChange={e => setTerm(e.target.value)}/><button><FaSearch/></button></form>
        <div>
            {data.results.map(res => (<li key={res.id}>{res.original_title || res.original_name}</li>))}
        </div>
    </div>
  )
}
