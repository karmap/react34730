// import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App(props) {

  const mensaje = 'Bienvenido a mi app'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }

  return (
    <div className='container'>
      <h1>¡Hola Mundo!</h1>
      <strong>Otro mensaje</strong>
      <h3 style={ estilos }>{ mensaje }</h3>
      <Saludo name="Juan" lastname='Pérez'/>
      <Saludo name='Ana' lastname='López'/>
      <Saludo name='Miguel' lastname='Gonzalez'/>
    </div>
  );
}

export default App;
