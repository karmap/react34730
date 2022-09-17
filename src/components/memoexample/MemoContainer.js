import { useEffect, useState } from "react";
import MemoButton from "./MemoButton";
import MemoTable from "./MemoTable"

const MemoContainer = () => {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Hubo render en container');
  })
  
  const clickHandler = () => {
    setCounter(counter+1)
  }

  return (
    <div>
        <MemoTable></MemoTable>
        <h1>Contador: {counter}</h1>
        <button className="btn" onClick={clickHandler} type='success'> Sumar </button>
    </div>
  )
}
export default MemoContainer