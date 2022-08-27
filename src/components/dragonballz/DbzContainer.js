import { useEffect, useState } from "react"
import DbzCardList from "./DbzCardList"

const DbzContainer = () => {

  const [chars, setChars] = useState([])
  
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
        <DbzCardList chars={chars}/>
    </>
  )
}
export default DbzContainer