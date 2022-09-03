import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DbzCard from "./DbzCard"

const DbzDetail = () => {
  const [char, setChar] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/character/' + id
    fetch( URL )
      .then( res => res.json() )
      .then( data => {
        // console.log( data );
        setChar( data )
      })
  }, [])
  

  return (
    <DbzCard {...char}/>
  )
}
export default DbzDetail