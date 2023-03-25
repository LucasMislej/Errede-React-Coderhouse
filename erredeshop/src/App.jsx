import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    
  );
}

export default App;
