// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App(props) {

  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([])

  useEffect( () => {
    
    console.log('Promesa en mounting');

    const getProducts = new Promise( (resolve, reject) => {
      const rand = Math.random()
      console.log( rand );

      if ( rand > 0.5 ) {
        resolve( ['mouse', 'teclado', 'cpu']  )
      } else {
        reject( 'Promesa rechazada' )
      }

    })

    getProducts
      .then( data => {
        console.log( data );
        setProducts( data )
      })
      .catch( err => { console.log( err ); })
      .finally( () => { console.log('finally siempre sucede'); })

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

      <div className='my-5'>
        <strong>Contador: {counter}</strong>
      </div>
      <button onClick={handleClick} className='btn my-5'>Click</button>

      {products.map( p => <div className='bg-orange-500 my-2'>{p}</div> )}

      <ItemListContainer greeting={'Saludos'}/>  
      <Saludo name='Miguel' lastname='Gonzalez'/>
      <Card/>
    </div>
  );
}

export default App;
