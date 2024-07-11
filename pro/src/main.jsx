import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './assets/componets/Details.jsx'
import Display from './assets/componets/Display.jsx'
import Continents from './assets/componets/Continet.jsx'
import DisplayContinets from './assets/componets/DisplayContinets.jsx'
import ContinentInfo from './assets/componets/ContinentInfo.jsx'
import CountryDetails from './assets/componets/CountryDetails.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/details",
   element:<Details/>
  },
  {
    path:"/display",
    element:<Display/>
  },
  {
    path:"/continent",
    element:<Continents/>
  },
  {
    path:"/Displaycontinent",
    element:<DisplayContinets/>
  },
  {
    path:"/ContinentInfo",
    element:<ContinentInfo/>
  },
  {
    path:"/country/:cca3",
    element:<CountryDetails/>
  },
 
  
  
 

 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
