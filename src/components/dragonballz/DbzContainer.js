import { useEffect, useState } from "react"
import { useFavs } from "../../context/FavsContext"
import DbzCardList from "./DbzCardList"

const DbzContainer = () => {

  const [chars, setChars] = useState([])
  const { favs, clearFavs } = useFavs()
  
  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/character'
    fetch( URL )
      .then( res => res.json() )
      .then( data => {
        console.log( data.results );
        setChars( data.results )
      })
  }, [])
  

  return (
    <>
        <div>Dragon Ball Z</div>
        <strong>Lista de favs</strong>
        {favs.map( (f,i) => <li key={i}>{f}</li> )}
        <button className="btn" onClick={clearFavs}>Borrar lista</button>
        <DbzCardList chars={chars}/>
    </>
  )
}
export default DbzContainer