import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from './Components/About'; 
import Home from './Components/Home';
import Vans from'./Components/Vans';

function App() {
  return (
    <BrowserRouter>
    <nav className='flex flex-row justify-between  mx-24'>
    <Link to="/">#VANILIFE</Link> 
    <div className='flex gap-2'>
    <Link to="/about">About</Link>
    <Link to="/vans">Vans</Link>
    </div>
    
    </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path='/vans' element={<Vans />}/>
      </Routes>
    </BrowserRouter>
  )
}



export default App;
