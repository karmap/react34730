import { useEffect, useState } from "react"
import Spinner from "./Spinner";

const SwapiContainer = () => {

  const [chars, setChars] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    setTimeout( async () => {
      await getChars()
      setLoading(false)
    }, 3000);

    console.log('Mounting ...');
  }, [])

  const getChars = async () => {
    const URL = 'https://swapi.dev/api/people/'
    const res = await fetch( URL )
    const data = await res.json()
    setChars(data.results)
    // fetch( URL )
    //   .then( response => response.json() )
    //   .then( data => {
    //     console.log(data);
    //     setChars(data.results)
    //   })
  }

  // if (loading) {
  //   return (
  //     <h1>Loading en true</h1>
  //   )
  // }
 
  return (
    <>
      <div>StarWars API</div>
      { loading ? 
        <Spinner/> :
        chars.map( char => <li key={char.url}>{ char.name }</li>)
      }

      {/* { loading && <h1>Loading en true</h1> } */}
    </>
  )
}
export default SwapiContainer