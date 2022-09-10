import { Link } from "react-router-dom"
import { useFavs } from "../../context/FavsContext"
import DbzCard from "./DbzCard"

const DbzCardList = ( {chars} ) => {

  const { addToFavs } = useFavs()

  const addHandler = ( event, name ) => {
    addToFavs( name )
    console.log(event);
  }

  return (
    <div>
      {/* { chars.map( c => <DbzCard key={c.id} {...c}/> )  } */}
      { chars.map( c =>
        <>
          <Link to={`/ram/${c.id}`}>
            <DbzCard key={c.id} id={c.id} name={c.name} species={c.species} image={c.image}/>
          </Link>
          <button onClick={(event)=>{addHandler(event, c.name)}} className="btn">Agregar a Favs</button>
        </>
      )}
    </div>
  )
}
export default DbzCardList