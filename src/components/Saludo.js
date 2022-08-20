const Saludo = ( {name, lastname, fn, children} ) => {

  if (fn) {
    fn()
  }

  return (
    <>
      <h1>¡Saludos a: {name} {lastname}!</h1>
      {children}
    </>
  )
}
export default Saludo

// export default function Saludo() {
//   return (
//     <div>Saludo</div>
//   )
// }