import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"
import products from "./productsData"

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems( products )
  }, [])
  
  return (
    <CartContext.Provider value={[]}>
      <div>
        { items.map( i =>
          <Link to={`/shop/item/${i.slug}`} key={i.id}>
            <div className="m-2 p-2 bg-blue-300"> { i.name } </div>
          </Link>
        )}
      </div>
    </CartContext.Provider>
  )
}
export default ItemListContainer