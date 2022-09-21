import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Category = () => {

  const { id: categoryId } = useParams()

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsByCategory()
  }, [])

  const getProductsByCategory = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    const q = query(itemCollection, where('category', '==', categoryId) )
    getDocs( q ).then( snapshot => {
        setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

  return (
    <>
      <div>Category: { categoryId }</div>
      { products.map( p => <li key={p.id}>{ p.title }</li>) }
    </>
  )
}
export default Category