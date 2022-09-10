import { useContext } from "react"
import DarkmodeContext from "../../context/Darkmode"

const ItemDetail = ( {item: {name, price}} ) => {
  
  const darkmode = useContext( DarkmodeContext )
  
  return (
    <div className="m-5">
        <div>
          <strong>Dark Mode: {darkmode ? 'Activado' : 'Desactivado'}</strong>
        </div>
        <div>{ name }</div>
        <div>{ price }</div>
    </div>
  )
}
export default ItemDetail