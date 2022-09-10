import { useContext } from "react"
import DarkmodeContext from "../context/Darkmode"

const Saludo = ( {name, lastname, fn, children} ) => {

  const darkmode = useContext(DarkmodeContext)

  if (fn) {
    fn()
  }

  const styles = {
    title: 'font-mono text-xl bg-orange-300 my-5'
  }

  return (
    <>
      <h1 className={styles.title}>¡Saludos a: {name} {lastname}!</h1>
      {children}

      <div>
        <strong>Dark Mode: {darkmode ? 'Activado' : 'Desactivado'}</strong>
        {/* <strong>desde context: {darkmode}</strong> */}
      </div>
    </>
  )
}
export default Saludo

// export default function Saludo() {
//   return (
//     <div>Saludo</div>
//   )
// }