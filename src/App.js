// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App(props) {

  const [counter, setCounter] = useState(0)

  useEffect( () => {
    setTimeout( ()=>{
      console.log('Efecto al montaje');
    }, 10000)

    // return () => {
    //   console.log('Efecto al desmontaje');
    // }
  }, [])
  
  useEffect( () => {
    console.log('Efecto al montaje y cambio en counter');
    // no usar aquí -> setCounter() generará loop infinito
  }, [counter])

  useEffect( () => {
    console.log('Efecto en cada render');
  })

  const handleClick = () => {
    console.log('hiciste click');
    setCounter( counter + 1 ) // counter++ -> counter = counter + 1
  }

  console.log('Hubo render');

  return (
    <div className='container'>
      <NavBar/>

      <div className='my-5'>
        <strong>Contador: {counter}</strong>
      </div>
      <button onClick={handleClick} className='btn my-5'>Click</button>

      <ItemListContainer greeting={'Saludos'}/>  
      <Saludo name='Miguel' lastname='Gonzalez'/>
      <Card/>
    </div>
  );
}

export default App;
