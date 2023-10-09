import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from './Components/About'; 
import Home from './Components/Home';
import Vans from'./Components/Vans/Vans';
import VansDetail from './Components/Vans/VansDetail';
import Layout from './Components/Layout'
import Dashboard from './Components/Host/Dashboard';
import Reviews from './Components/Host/Reviews';
import Income from './Components/Host/Income';
import HostLayout from './Components/HostLayout';
import HostVans from './Components/Host/HostVans'
import HostVanDetail from './Components/Host/HostVanDetail'
import HostVanInfo from './Components/Host/HostVanInfo';
import HostVanPricing from './Components/Host/HostVanPricing';
import HostVanPhotos from './Components/Host/HostVanPhotos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element ={<Layout/>}>
        <Route path="*" element={<h1>Page not found!</h1>} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path='/vans' element={<Vans />}/>
        <Route path='/vans/:id' element={<VansDetail/>}/>
        <Route path='host' element={<HostLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="income" element={<Income />} />
        <Route path='reviews' element={<Reviews/>}/>
        <Route path='vans' element={<HostVans/>}/>
        <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}



export default App;
