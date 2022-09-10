import React, { useContext, useState } from "react"

const FavsContext = React.createContext([])

const useFavs = () => {
    return useContext(FavsContext)
}

const FavsProvider = ( {defaultValue = [], children} ) => {

  const [favs, setFavs] = useState(defaultValue)

  const addToFavs = ( item ) => {
    // setFavs ( favs.concat( item ) )
    setFavs( prevState => prevState.concat(item) )
  }

  const clearFavs = () => { setFavs([]) }

  const context = {
    favs,
    addToFavs,
    clearFavs
  }
  
  return (
    <FavsContext.Provider value={context}>
      {children}
    </FavsContext.Provider>
  )
}

export {useFavs, FavsProvider}