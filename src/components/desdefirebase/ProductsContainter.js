import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

export const ProductCard = ( {title, price, stock, img} ) => {
  return (
    <div>
        <li>{title}</li>
        <li>{price}</li>
        <li>{stock}</li>
        <img className="w-10" src={img} />
    </div>
  )
}

const ProductsContainter = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    // getIphone()
    getProducts()
  }, [])

//   const getIphone = () => {
//     const db = getFirestore()
//     const iphoneRef = doc( db, 'items', 'ez07nI5oGmxgO33pFUEg' )
//     getDoc( iphoneRef ).then( res => {
//       const data = res.data()
//       console.log( data );
//       setProducts( data )
//     })
//   }

  const getProducts = () => {
    const db = getFirestore()
    const itemCollection = collection( db, 'items' )
    getDocs( itemCollection ).then( snapshot => {
        setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
    })
  }

  return (
    // <ProductCard {...products}/>
    <>
      { products.map( p => <ProductCard key={p.id} {...p}/> ) }
    </>
  )
}
export default ProductsContainter