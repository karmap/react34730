import DbzContainer from "./components/dragonballz/DbzContainer"
import { FavsProvider } from "./context/FavsContext"

const DbzApp = () => {
  return (
    <div>
      <FavsProvider>
        <DbzContainer/>
      </FavsProvider>
    </div>
  )
}
export default DbzApp