import React, { useEffect, useState } from "react"
import MemoButton from "./MemoButton"

const MemoTable = React.memo( () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const arr = []
    for (let i = 1; i <= 1000; i++) {
      arr.push( i )
    }
    setData( arr )
  }, [])

  useEffect(() => {
    console.log('Hubo render en table');
  })

  return (
    <div>
        <MemoButton type='info'/>
        <MemoButton type='error'/>
        { data.map( n => <span key={n} className="m-1">{n}</span> ) } 
    </div>
  )
})

export default MemoTable