const DbzCard = ( {id, name, species, image} ) => {
  return (
    <div>
        <h1>{id} - {name}</h1>
        <h3>{species}</h3>
        <img src={image}/>
    </div>
  )
}
export default DbzCard