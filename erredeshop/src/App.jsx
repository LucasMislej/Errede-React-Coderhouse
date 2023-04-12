import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer';



function App() {
 
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>

          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
          <Route path='/detalles/:pid' element={<ItemDetailContainer/>}/>
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
