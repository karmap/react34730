import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductsByCategory } from "../../helpers/firebaseHelpers"

const Category = () => {

  const { id: categoryId } = useParams()

  const [products, setProducts] = useState([])

  useEffect( () => {
    const getProducts = async () => {
        setProducts( await getProductsByCategory( categoryId ) )
    }
    getProducts()
  }, [])

  return (
    <>
      <div>Category: { categoryId }</div>
      { products.map( p => <li key={p.id}>{ p.title }</li>) }
    </>
  )
}
export default Category