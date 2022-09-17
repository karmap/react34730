import { useEffect } from "react";

const MemoButton = ( {type} ) => {

    useEffect(() => {
      console.log('Hubo render en button');
    })

  return (
    <button className={`btn btn-outline btn-${type}`}>Botón</button>
  )
}
export default MemoButton