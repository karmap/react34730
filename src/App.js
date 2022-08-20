// import logo from './logo.svg';
import './App.css';

function App() {

  const mensaje = 'Bienvenido a mi app'

  return (
    <div className='container'>
      <h1>¡Hola Mundo!</h1>
      <strong>Otro mensaje</strong>
      <h3 style={ {backgroundColor: '#888'} }>{ mensaje }</h3>
    </div>
  );
}

export default App;
