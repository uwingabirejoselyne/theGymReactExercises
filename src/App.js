import './App.css';
import React from 'react';
import { RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route} from "react-router-dom"
import Login,{loader as loginLoader} from './Components/Login';

import About from './Components/About'; 
import Home from './Components/Home';
import Vans,{loader as vansLoader} from'./Components/Vans/Vans';
import VansDetail, {loader as vanDetailLoader} from './Components/Vans/VansDetail';
import Layout from './Components/Layout'
import Dashboard from './Components/Host/Dashboard';
import Reviews from './Components/Host/Reviews';
import Income from './Components/Host/Income';
import HostLayout from './Components/HostLayout';
import HostVans,{ loader as hostVansLoader} from './Components/Host/HostVans'
import HostVanDetail, { loader as hostVanDetailLoader} from './Components/Host/HostVanDetail'
import HostVanInfo from './Components/Host/HostVanInfo';
import HostVanPricing from './Components/Host/HostVanPricing';
import HostVanPhotos from './Components/Host/HostVanPhotos';
import Error from './Components/Error';
import { requireAuth } from './utils';

const router =createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
    />
    <Route
      path="vans"
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route path="vans/:id" 
    element={<VansDetail />} 
    loader={vanDetailLoader} />

    <Route path="host" element={<HostLayout />}>
      <Route 
       index
       element={<Dashboard />}
       loader={async ()  => await requireAuth()}
      />
      <Route path="income" element={<Income />} 
       loader={async ()  => await requireAuth()}
      />
      <Route path="reviews" element={<Reviews />} 
       loader={async ()  => await requireAuth()}
       />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        loader={hostVanDetailLoader}
      >
        <Route index element={<HostVanInfo />}
         loader={async ()  => await requireAuth()}
         />

        <Route path="pricing" element={<HostVanPricing />}
         loader={async ()  => await requireAuth()}
        />
        <Route path="photos" element={<HostVanPhotos />}
        loader={async ()  => await requireAuth()}
         />
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
