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
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import MemoContainer from './components/memoexample/MemoContainer';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ProductsContainter from './components/desdefirebase/ProductsContainter';
import Category from './components/desdefirebase/Category';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
      <Route path='/shop' element={<ItemListContainer/>}/>
      <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/>
      <Route path='/memo' element={<MemoContainer/>}/>
      <Route path='/products' element={<ProductsContainter/>}/>
      <Route path='/products/category/:id' element={<Category/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
