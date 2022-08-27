const Saludo = ( {name, lastname, fn, children} ) => {

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
    </>
  )
}
export default Saludo

// export default function Saludo() {
//   return (
//     <div>Saludo</div>
//   )
// }