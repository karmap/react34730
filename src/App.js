// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App(props) {

  const mensaje = 'Bienvenido a mi app'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }

  const log = () => { console.log('Hola'); }
  const log2 = () => { console.log('Hi!'); }

  return (
    <div className='container'>
      <NavBar/>
      <ItemListContainer greeting={'Saludos'}/>
      <h1>¡Hola Mundo!</h1>
      <strong>Otro mensaje</strong>
      <h3 style={ estilos }>{ mensaje }</h3>
      <Saludo name="Juan" lastname='Pérez' fn={log}>
        <p>Este es un mensaje 1</p>
        <p>Este es un mensaje 2</p>
        <p>Este es un mensaje 3</p>
      </Saludo>
      <Saludo name='Ana' lastname='López' fn={log2}>
        <li>Un elemento de lista</li>
      </Saludo>
      <Saludo name='Miguel' lastname='Gonzalez'/>
    </div>
  );
}

export default App;
