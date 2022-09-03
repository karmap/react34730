import { Link } from "react-router-dom"
import DbzCard from "./DbzCard"

const DbzCardList = ( {chars} ) => {
  return (
    <div>
      {/* { chars.map( c => <DbzCard key={c.id} {...c}/> )  } */}
      { chars.map( c =>
        <Link to={`/ram/${c.id}`}>
          <DbzCard key={c.id} id={c.id} name={c.name} species={c.species} image={c.image}/>
        </Link>
      )}
    </div>
  )
}
export default DbzCardList