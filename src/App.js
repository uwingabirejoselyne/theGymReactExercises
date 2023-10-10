import './App.css';
import React from 'react';
import { RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route} from "react-router-dom"

import About from './Components/About'; 
import Home from './Components/Home';
import Vans,{loader as vansLoader} from'./Components/Vans/Vans';
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
import Error from './Components/Error';


const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route path="vans/:id" element={<VansDetail />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>
    <Route path="*" element={<h1>Page not found!</h1>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}



export default App;
