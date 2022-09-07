const ItemDetail = ( {item: {name, price}} ) => {
  return (
    <div className="m-5">
        <div>{ name }</div>
        <div>{ price }</div>
    </div>
  )
}
export default ItemDetail