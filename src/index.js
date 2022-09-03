import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SwapiContainer from './components/swapi/SwapiContainer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DbzApp from './DbzApp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DbzDetail from './components/dragonballz/DbzDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/swapi' element={<SwapiContainer/>}/>
      <Route path='/ram' element={<DbzApp/>}/>
      <Route path='/ram/:id' element={<DbzDetail/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
