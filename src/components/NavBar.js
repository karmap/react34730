import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Acerca de</li>
        <CartWidget/>
    </div>
  )
}
export default NavBar