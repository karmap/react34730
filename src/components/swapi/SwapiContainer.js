import { useEffect, useState } from "react"

const SwapiContainer = () => {

  const [chars, setChars] = useState([{name:'luke'}, {name:'r2d2'}])

  useEffect( () => {
    setTimeout(() => {
      getChars()
    }, 5000);

    console.log('Mounting ...');
  }, [])

  const getChars = () => {
    const URL = 'https://swapi.dev/api/people/'
    fetch( URL )
      .then( response => response.json() )
      .then( data => {
        console.log(data);
        setChars(data.results)
      })
  }
 
  return (
    <>
      <div>StarWars API</div>
      { chars.map( char => <li key={char.url}>{ char.name }</li>) }
    </>
  )
}
export default SwapiContainer