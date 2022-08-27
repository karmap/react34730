import DbzCard from "./DbzCard"

const DbzCardList = ( {chars} ) => {
  return (
    <div>
      {/* { chars.map( c => <DbzCard key={c.id} {...c}/> )  } */}
      { chars.map( c =>
        <DbzCard key={c.id} id={c.id} name={c.name} species={c.species} image={c.image}/>
      )}
    </div>
  )
}
export default DbzCardList