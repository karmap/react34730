import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import products from "./productsData"

export const ButtonCount = ( {total, setTotal} ) => {

  const add = () => {
    setTotal( total + 1 )
  }

  return (
    <button onClick={add} className="btn">{total}</button>
  )
}

export const InputCount = ( {total, setTotal} ) => {
  const onChangeHandler = ( event ) => {
    const newTotal = parseInt(event.target.value)

    if (newTotal > 5) {
      setTotal( newTotal )
    }
    console.log( event.target.value );
  }
  return (
    <>
      <div>{total}</div>
      <input onChange={onChangeHandler} type='number' />
    </>
  )
}

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [total, setTotal] = useState(1)
  const { slug } = useParams()

  useEffect(() => {
    getItem().then( data => {
        //( console.log(slug);
        if (data) {
            setItem(data)
        }
    })
  }, [])
  
  // getItem con Promise
  const getItem = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products.find( p => p.slug == slug ) )
      }, 2000);
    })
  }

  // getItem con fetch
  // TODO

  // const Count = total < 5 ? ButtonCount : InputCount

  return (
    <>
      <ItemDetail item={item}/>
      <div className="m-5">
        {total < 5 ?
          <ButtonCount total={total} setTotal={setTotal}/>
          :
          <InputCount total={total} setTotal={setTotal}/>
        }
        {/* Total: <Count total={total} setTotal={setTotal}/> */}
      </div>
    </>
  )
}
export default ItemDetailContainer