import { Link } from "react-router-dom"

export const DarkmodeButton = () => {
  return (
    <input type="checkbox" className="toggle" />
  )
}

const Footer = () => {
  return (
    <div className="m-5">
      <li><Link to={'/'}>Mi app</Link></li>
      <li><Link to={'/swapi'}>StarWars API</Link></li>
      <li><Link to={'/ram'}>Rick and Morty</Link></li>
      <DarkmodeButton/>
    </div>
  )
}
export default Footer